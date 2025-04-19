/* ==================== */
/* СКРИПТЫ ДЛЯ СТРАНИЦЫ КОНТАКТОВ */
/* ==================== */

document.addEventListener('DOMContentLoaded', function() {
    // Обработка формы обратной связи
    const feedbackForm = document.getElementById('feedback-form');
    
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Здесь можно добавить AJAX-отправку формы
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData.entries());
            
            console.log('Форма отправлена:', formValues);
            
            // Показываем сообщение об успехе
            alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
            this.reset();
        });
    }
    
    // Анимация шагов заказа
    const animateSteps = () => {
        const steps = document.querySelectorAll('.step-card');
        
        steps.forEach((step, index) => {
            const stepPosition = step.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (stepPosition < screenPosition) {
                setTimeout(() => {
                    step.style.opacity = '1';
                    step.style.transform = 'translateY(0)';
                }, 150 * index);
            }
        });
    };
    
    // Инициализация анимации
    const steps = document.querySelectorAll('.step-card');
    steps.forEach(step => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(20px)';
        step.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Запуск анимации при загрузке и скролле
    animateSteps();
    window.addEventListener('scroll', animateSteps);
    
    // Плавный скролл для якорей
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});