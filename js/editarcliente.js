// Importamos funciones necesarias desde otros archivos.
import { obtenerCliente, editarCliente } from "./API.js";
import { mostrarAlerta, validarVacio } from './funciones.js';

// Creamos una función autoejecutable para encapsular nuestro código.
(function () {
    // Obtenemos referencias a los elementos del formulario.
    const nombreInput = document.getElementById('nombre');
    // ... otras referencias a elementos del formulario

    // Agregamos un listener que se ejecutará cuando el DOM esté completamente cargado.
    document.addEventListener('DOMContentLoaded', async () => {
        // Obtenemos el ID del cliente desde la URL.
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parseInt(parametrosURL.get('id'));

        // Obtenemos los datos del cliente de la API y los mostramos en el formulario.
        const cliente = await obtenerCliente(idCliente);
        mostrarCliente(cliente);

        // Agregamos un listener al formulario para manejar la validación y envío de datos.
        const formulario = document.getElementById('formulario');
        formulario.addEventListener('submit', validarCliente);
    });

    // Esta función llena el formulario con los datos del cliente.
    const mostrarCliente = (cliente) => {
        // Desestructuramos el objeto cliente para obtener sus propiedades.
        const { nombre, empresa, email, telefono, id } = cliente;

        // Asignamos los valores a los campos del formulario.
        // ... asignación de valores a otros campos
        nombreInput.value = nombre;
        empresaInput.value = empresa;
        emailInput.value = email;
        telefonoInput.value = telefono;
        idInput.value = id;
    }

    // Esta función maneja la validación y envío del formulario.
    async function validarCliente(e) {
        e.preventDefault(); // Previene el envío por defecto del formulario.

        // Crea un objeto cliente con los valores del formulario.
        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: parseInt(idInput.value)
        }

        // Valida si alguno de los campos está vacío.
        if (validarVacio(cliente)) {
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        // Envía el cliente actualizado a la API y redirige a 'index.html'.
        await editarCliente(cliente);
        window.location.href = 'index.html';
    }

})();