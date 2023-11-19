// Importamos las funciones 'mostrarAlerta' y 'validarVacio' desde el archivo 'funciones.js'.
import { mostrarAlerta, validarVacio } from './funciones.js';

// Importamos la función 'nuevoCliente' desde el archivo 'API.js'.
import { nuevoCliente } from './API.js';

// Creamos una función autoejecutable para encapsular nuestro código y evitar la contaminación del scope global.
(function () {

    // Obtenemos el elemento del formulario mediante su ID y lo almacenamos en la variable 'formulario'.
    const formulario = document.getElementById('formulario');

    // Añadimos un 'event listener' al formulario para ejecutar la función 'validarCliente' cuando se envíe el formulario.
    formulario.addEventListener('submit', validarCliente);

    // Declaramos la función 'validarCliente' que se ejecutará al enviar el formulario.
    function validarCliente(e) {
        // Prevenimos el comportamiento por defecto del formulario para controlar el envío manualmente.
        e.preventDefault();

        // Obtenemos los valores de los campos del formulario y los almacenamos en variables.
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const empresa = document.getElementById('empresa').value;

        // Creamos un objeto 'cliente' con las propiedades recogidas del formulario.
        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }

        // Usamos la función 'validarVacio' para verificar si alguno de los campos está vacío.
        if (validarVacio(cliente)) {
            // Si alguno está vacío, mostramos una alerta y detenemos la ejecución con 'return'.
            mostrarAlerta('Todos los campos son obligatorios...');
            return;
        }
        // Si todos los campos están llenos, llamamos a 'nuevoCliente' para procesar el cliente.
        nuevoCliente(cliente);
    }
})(); // Fin de la función autoejecutable