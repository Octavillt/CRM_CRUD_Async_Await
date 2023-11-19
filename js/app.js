
// Importamos las funciones 'obtenerClientes' y 'eliminarCliente' desde './API.js'.
import { obtenerClientes, eliminarCliente } from './API.js';

// Creamos una función autoejecutable para encapsular nuestro código.
(function () {
    // Obtenemos el elemento del DOM donde se mostrará la lista de clientes.
    const listado = document.getElementById('listado-clientes');

    // Añadimos un 'event listener' al documento que ejecutará 'mostrarClientes' cuando el DOM esté completamente cargado.
    document.addEventListener('DOMContentLoaded', mostrarClientes);

    // Añadimos un 'event listener' al listado para manejar clics, específicamente para eliminar clientes.
    listado.addEventListener('click', confirmarEliminar);

    // Declaramos la función asincrónica 'mostrarClientes'.
    async function mostrarClientes() {
        // Obtenemos los clientes de la API.
        const clientes = await obtenerClientes();

        // Iteramos sobre cada cliente y construimos filas para la tabla.
        clientes.forEach(cliente => {
            const { nombre, email, telefono, empresa, id } = cliente;

            // Creamos un nuevo elemento 'tr' para la tabla.
            const row = document.createElement('TR');

            // Configuramos el HTML interno de la fila con los datos del cliente.
            row.innerHTML += `
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                    <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${telefono}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                    <p class="text-gray-600">${empresa}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                    <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                    <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                </td>
            `;

            // Añadimos la fila al elemento 'listado'.
            listado.appendChild(row);
        });
    }

    function confirmarEliminar(e) {
        // Verificamos si el elemento clicado tiene la clase 'eliminar'.
        if (e.target.classList.contains('eliminar')) {
            // Obtenemos el ID del cliente a eliminar de los atributos de datos.
            const clienteId = parseInt(e.target.dataset.cliente);

            // Mostramos un mensaje de confirmación.
            const confirmar = confirm('¿Quieres eliminar el Registro?');

            // Si el usuario confirma, llamamos a la función 'eliminarCliente'.
            if (confirmar) {
                eliminarCliente(clienteId);
            }
        }
    }

})();
