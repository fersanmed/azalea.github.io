// Cambiar imagen principal al hacer clic en miniatura
function cambiarImagen(miniatura) {
    const imagenPrincipal = document.getElementById('imagenPrincipal');
    imagenPrincipal.src = miniatura.src;
    
    // Quitar clase active de todas las miniaturas
    document.querySelectorAll('.imagenes-miniaturas img').forEach(img => {
        img.classList.remove('active');
    });
    
    // Añadir clase active a la miniatura clickeada
    miniatura.classList.add('active');
}

// Incrementar cantidad
function incrementarCantidad() {
    const input = document.getElementById('cantidad');
    input.value = parseInt(input.value) + 1;
}

// Decrementar cantidad
function decrementarCantidad() {
    const input = document.getElementById('cantidad');
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

// Toggle desplegables
function toggleDesplegable(button) {
    const desplegable = button.parentElement;
    const content = desplegable.querySelector('.desplegable-content');
    const icon = button.querySelector('i');
    
    // Toggle clase active
    desplegable.classList.toggle('active');
    
    // Rotar icono
    if (desplegable.classList.contains('active')) {
        icon.style.transform = 'rotate(180deg)';
        content.style.maxHeight = content.scrollHeight + 'px';
    } else {
        icon.style.transform = 'rotate(0deg)';
        content.style.maxHeight = '0';
    }
}

// Activar primera miniatura al cargar
document.addEventListener('DOMContentLoaded', function() {
    const primeraMiniatura = document.querySelector('.imagenes-miniaturas img');
    if (primeraMiniatura) {
        primeraMiniatura.classList.add('active');
    }
});
