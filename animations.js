document.addEventListener('DOMContentLoaded', function() {
    // Элементы для анимации
    const ctaBtn = document.getElementById('cta-btn');
    const lampImg = document.getElementById('lamp-img');
    
    // Анимация кнопки CTA
    let glowInterval;
    
    function startGlow() {
        let opacity = 0.3;
        let increasing = true;
        
        glowInterval = setInterval(() => {
            if (increasing) {
                opacity += 0.02;
                if (opacity >= 0.7) increasing = false;
            } else {
                opacity -= 0.02;
                if (opacity <= 0.3) increasing = true;
            }
            
            ctaBtn.style.boxShadow = `0 0 15px rgba(46, 204, 113, ${opacity})`;
        }, 50);
    }
    
    function stopGlow() {
        clearInterval(glowInterval);
        ctaBtn.style.boxShadow = '0 4px 15px rgba(39, 174, 96, 0.3)';
    }
    
    ctaBtn.addEventListener('mouseenter', () => {
        stopGlow();
        ctaBtn.style.boxShadow = '0 0 20px rgba(46, 204, 113, 0.8)';
    });
    
    ctaBtn.addEventListener('mouseleave', () => {
        startGlow();
    });
    
    startGlow();
    
    // Анимация изображения лампы
    let floatPosition = 0;
    let floatDirection = 1;
    
    function floatAnimation() {
        floatPosition += 0.5 * floatDirection;
        
        if (floatPosition > 15) floatDirection = -1;
        if (floatPosition < -15) floatDirection = 1;
        
        lampImg.style.transform = `translateY(${floatPosition}px)`;
        requestAnimationFrame(floatAnimation);
    }
    
    floatAnimation();
    
    // Свечение вокруг лампы
    function lampGlow() {
        let glowSize = 0;
        let glowDirection = 1;
        
        setInterval(() => {
            glowSize += 0.5 * glowDirection;
            
            if (glowSize > 15) glowDirection = -1;
            if (glowSize < 5) glowDirection = 1;
            
            lampImg.style.filter = `drop-shadow(0 0 ${glowSize}px rgba(46, 204, 113, 0.5))`;
        }, 50);
    }
    
    lampGlow();
    
    // Плавная прокрутка для навигации
    document.querySelectorAll('nav a').forEach(anchor => {
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

document.addEventListener('DOMContentLoaded', function() {
    // Фильтрация продуктов
    const typeFilter = document.getElementById('type-filter');
    const powerFilter = document.getElementById('power-filter');
    const productCards = document.querySelectorAll('.product-card');
    
    function filterProducts() {
        const typeValue = typeFilter.value;
        const powerValue = powerFilter.value;
        
        productCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPower = card.dataset.power;
            
            const typeMatch = typeValue === 'all' || cardType === typeValue;
            const powerMatch = powerValue === 'all' || cardPower === powerValue;
            
            if (typeMatch && powerMatch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    typeFilter.addEventListener('change', filterProducts);
    powerFilter.addEventListener('change', filterProducts);
    
    // Раскрытие деталей продукта
    const productBtns = document.querySelectorAll('.product-btn');
    
    productBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const details = this.parentElement.querySelector('.product-details');
            const isActive = details.classList.contains('active');
            
            // Закрываем все открытые детали
            document.querySelectorAll('.product-details').forEach(item => {
                item.classList.remove('active');
            });
            
            // Меняем текст кнопок
            productBtns.forEach(b => {
                b.textContent = 'Подробнее';
            });
            
            // Открываем текущую, если не была активна
            if (!isActive) {
                details.classList.add('active');
                this.textContent = 'Скрыть';
            }
        });
    });
    
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


/* ==================== */
/* СКРИПТЫ ДЛЯ СТРАНИЦЫ ПРОДУКЦИИ */
/* ==================== */

document.addEventListener('DOMContentLoaded', function() {
    // Фильтрация продуктов
    const typeFilter = document.getElementById('type-filter');
    const powerFilter = document.getElementById('power-filter');
    const productCards = document.querySelectorAll('.product-card');
    
    function filterProducts() {
        const typeValue = typeFilter.value;
        const powerValue = powerFilter.value;
        
        productCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPower = card.dataset.power;
            
            const typeMatch = typeValue === 'all' || cardType === typeValue;
            const powerMatch = powerValue === 'all' || cardPower === powerValue;
            
            if (typeMatch && powerMatch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    typeFilter.addEventListener('change', filterProducts);
    powerFilter.addEventListener('change', filterProducts);
    
    // Раскрытие деталей продукта
    const productBtns = document.querySelectorAll('.product-btn');
    
    productBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const details = this.parentElement.querySelector('.product-details');
            const isActive = details.classList.contains('active');
            
            // Закрываем все открытые детали
            document.querySelectorAll('.product-details').forEach(item => {
                item.classList.remove('active');
            });
            
            // Меняем текст кнопок
            productBtns.forEach(b => {
                b.textContent = 'Подробнее';
            });
            
            // Открываем текущую, если не была активна
            if (!isActive) {
                details.classList.add('active');
                this.textContent = 'Скрыть';
            }
        });
    });
    
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
    
    // Анимация карточек при загрузке
    const animateCards = () => {
        productCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 150 * index);
        });
    };
    
    // Инициализация анимации
    productCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    setTimeout(animateCards, 300);
});

/* ==================== */
/* СКРИПТЫ ДЛЯ СТРАНИЦЫ ОТЗЫВОВ */
/* ==================== */

document.addEventListener('DOMContentLoaded', function() {
    // Анимация появления элементов
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.testimonial-card, .benefit-card, .cta-box');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Инициализация анимации
    const elements = document.querySelectorAll('.testimonial-card, .benefit-card, .cta-box');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Запуск анимации при загрузке и скролле
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Обработка формы CTA
    const ctaForm = document.querySelector('.cta-form');
    if (ctaForm) {
        ctaForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Здесь можно добавить AJAX-отправку формы
            alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
            this.reset();
        });
    }
    
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