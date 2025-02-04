document.addEventListener("DOMContentLoaded", function () {
    const dots = document.querySelectorAll(".dot");
    
    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            document.querySelector(".dot.active").classList.remove("active");
            dot.classList.add("active");
        });
    });
});

let currentDot = 0;
const hero = document.querySelector('.hero');

function changeBackground() {
    // Dots'ları güncelle
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentDot].classList.add('active');

    // Arka plan resmini değiştir
    const images = [
        'https://raw.githubusercontent.com/sareyikama/sareyikamawebsite/refs/heads/main/images/test.jpeg',
        'https://raw.githubusercontent.com/sareyikama/sareyikamawebsite/refs/heads/main/images/otherimage1.png',
        'https://raw.githubusercontent.com/sareyikama/sareyikamawebsite/refs/heads/main/images/otherimage2.png',
        'https://raw.githubusercontent.com/sareyikama/sareyikamawebsite/refs/heads/main/images/otherimage3.png'
    ];

    hero.style.backgroundImage = `url('${images[currentDot]}')`;

    // currentDot'u güncelle
    currentDot = (currentDot + 1) % dots.length;
}

// Her 10 saniyede bir değişim yap
setInterval(changeBackground, 10000);

// İlk background'u başlat
changeBackground();
