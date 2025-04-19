/* ==================== */
/* СКРИПТЫ ДЛЯ СТРАНИЦЫ FAQ */
/* ==================== */

document.addEventListener('DOMContentLoaded', function() {
    // Переключение табов
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Удаляем активный класс у всех кнопок и контента
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Добавляем активный класс текущей кнопке и контенту
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Аккордеон
    const accordionBtns = document.querySelectorAll('.accordion-btn');
    
    accordionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const isActive = this.classList.contains('active');
            
            // Закрываем все элементы
            accordionBtns.forEach(b => {
                b.classList.remove('active');
                b.nextElementSibling.style.maxHeight = null;
            });
            
            // Открываем текущий, если он был закрыт
            if (!isActive) {
                this.classList.add('active');
                const content = this.nextElementSibling;
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
    
    // Открываем первый элемент аккордеона по умолчанию
    if (accordionBtns.length > 0) {
        accordionBtns[0].classList.add('active');
        accordionBtns[0].nextElementSibling.style.maxHeight = 
            accordionBtns[0].nextElementSibling.scrollHeight + 'px';
    }
    
    // Анимация появления элементов
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.accordion-item, .certificate-card');
        
        elements.forEach((element, index) => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, 100 * index);
            }
        });
    };
    
    // Инициализация анимации
    const elements = document.querySelectorAll('.accordion-item, .certificate-card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Запуск анимации при загрузке и скролле
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});