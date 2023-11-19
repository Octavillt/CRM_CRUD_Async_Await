// Define una URL base para las solicitudes HTTP a la API.
const url = 'http://localhost:4000/clientes';

// Exporta la función 'nuevoCliente' para crear un nuevo cliente.
export const nuevoCliente = async cliente => {
    try {
        // Realiza una solicitud POST a la API para crear un nuevo cliente.
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente), // Convierte el objeto cliente a JSON.
            headers: {
                'Content-Type': 'application/json' // Establece el tipo de contenido esperado.
            }
        });
        // Redirige a 'index.html' después de crear el cliente.
        window.location = 'index.html';
    } catch (error) {
        // Registra en consola si hay un error.
        console.error(error);
    }
}

// Exporta la función 'obtenerClientes' para recuperar todos los clientes.
export const obtenerClientes = async () => {
    try {
        // Realiza una solicitud GET a la API para obtener todos los clientes.
        const resultado = await fetch(url);
        const clientes = await resultado.json(); // Convierte la respuesta a JSON.
        return clientes; // Retorna los clientes obtenidos.
    } catch (error) {
        console.log(error); // Registra en consola si hay un error.
    }
}

// Exporta la función 'eliminarCliente' para eliminar un cliente por su ID.
export const eliminarCliente = async id => {
    try {
        // Realiza una solicitud DELETE a la API para eliminar un cliente específico.
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.error(error); // Registra en consola si hay un error.
    }
}

// Exporta la función 'obtenerCliente' para recuperar un cliente por su ID.
export const obtenerCliente = async id => {
    try {
        // Realiza una solicitud GET a la API para obtener un cliente específico.
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json(); // Convierte la respuesta a JSON.
        return cliente; // Retorna el cliente obtenido.
    } catch (error) {
        console.error(error); // Registra en consola si hay un error.
    }
}

// Exporta la función 'editarCliente' para actualizar un cliente.
export const editarCliente = async cliente => {
    try {
        // Realiza una solicitud PUT a la API para actualizar un cliente específico.
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente), // Convierte el objeto cliente a JSON.
            headers: {
                'Content-Type': 'application/json' // Establece el tipo de contenido esperado.
            }
        });
        // Redirige a 'index.html' después de actualizar el cliente.
        window.location = 'index.html';
    } catch (error) {
        console.error(error); // Registra en consola si hay un error.
    }
}
