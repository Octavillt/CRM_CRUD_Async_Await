// Exportamos la función 'mostrarAlerta'.
export function mostrarAlerta(mensaje) {
    // Buscamos en el documento un elemento con la clase 'bg-red-100'.
    const alerta = document.querySelector('.bg-red-100');

    // Si no existe una alerta ya mostrándose, ejecutamos el siguiente bloque de código.
    if (!alerta) {
        // Creamos un elemento 'p' para mostrar la alerta.
        const alertaP = document.createElement('P');

        // Añadimos varias clases para estilizar la alerta (estas clases parecen ser de Tailwind CSS).
        alertaP.classList.add('bg-red-100', "border-red-400", "text-red-700", "px-4", "py-3", "rounded", "max-w-lg", "mx-auto", "mt-6", "text-center")

        // Establecemos el contenido interno del párrafo, incluyendo el mensaje de error.
        alertaP.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;

        // Añadimos el párrafo al formulario (se asume que 'formulario' está definido en un scope superior).
        formulario.appendChild(alertaP);

        // Programamos la eliminación de la alerta después de 3 segundos.
        setTimeout(() => {
            alertaP.remove();
        }, 3000);
    }
}

// Exportamos la función 'validarVacio' que recibe un objeto.
export const validarVacio = (obj) => {
    // Usamos 'Object.values' para obtener los valores del objeto y 'every' para verificar si todos los campos están llenos.
    // Si alguno de los campos está vacío, la función retorna 'true'.
    return !Object.values(obj).every(input => input !== '');
}
