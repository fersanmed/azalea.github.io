// Función para abrir/cerrar preguntas FAQ
function toggleFAQ(button) {
    const faqItem = button.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const icon = button.querySelector('i');
    const allItems = document.querySelectorAll('.faq-item');
    
    // Cerrar todas las demás preguntas
    allItems.forEach(item => {
        if (item !== faqItem && item.classList.contains('active')) {
            item.classList.remove('active');
            item.querySelector('.faq-answer').style.maxHeight = '0';
            item.querySelector('i').style.transform = 'rotate(0deg)';
        }
    });
    
    // Toggle de la pregunta actual
    if (faqItem.classList.contains('active')) {
        // Cerrar
        faqItem.classList.remove('active');
        answer.style.maxHeight = '0';
        icon.style.transform = 'rotate(0deg)';
    } else {
        // Abrir
        faqItem.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.style.transform = 'rotate(180deg)';
    }
}
