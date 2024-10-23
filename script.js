let count = 0;
const contadorElement = document.getElementById('contador');

function actualizarContador() {
    contadorElement.textContent = count;
}

document.addEventListener('click', (event) => {
    if (event.button === 0) { // Clic izquierdo
        count++;
    } else if (event.button === 2) { // Clic derecho
        count--;
    }
    actualizarContador();
});

// Prevenir el menú contextual en clic derecho
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});
