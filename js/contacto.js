// Manejo del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;
    
    // Validación básica
    if (!nombre || !email || !asunto || !mensaje) {
        mostrarMensaje('Por favor, completa todos los campos obligatorios.', 'error');
        return;
    }
    
    // Validar email
    if (!validarEmail(email)) {
        mostrarMensaje('Por favor, introduce un email válido.', 'error');
        return;
    }
    
    // Simular envío (aquí conectarías con tu backend o servicio de email)
    const btnEnviar = document.querySelector('.btn-enviar');
    btnEnviar.textContent = 'Enviando...';
    btnEnviar.disabled = true;
    
    // Simular delay de envío
    setTimeout(() => {
        // Aquí irían los datos para enviar por email o a tu backend
        console.log('Datos del formulario:', {
            nombre,
            email,
            telefono,
            asunto,
            mensaje
        });
        
        // Mostrar mensaje de éxito
        mostrarMensaje('¡Gracias por contactarnos! Te responderemos pronto.', 'success');
        
        // Limpiar formulario
        document.getElementById('contactForm').reset();
        
        // Restaurar botón
        btnEnviar.textContent = 'Enviar mensaje';
        btnEnviar.disabled = false;
    }, 1500);
});

// Función para validar email
function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Función para mostrar mensajes
function mostrarMensaje(texto, tipo) {
    const messageDiv = document.getElementById('formMessage');
    messageDiv.textContent = texto;
    messageDiv.className = `form-message ${tipo}`;
    messageDiv.style.display = 'block';
    
    // Ocultar mensaje después de 5 segundos
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 5000);
}
