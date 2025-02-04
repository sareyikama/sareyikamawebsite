document.addEventListener("DOMContentLoaded", function () {
    const dots = document.querySelectorAll(".dot");
    
    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            document.querySelector(".dot.active").classList.remove("active");
            dot.classList.add("active");
        });
    });
});

document.getElementById("servicesBtn").addEventListener("click", function(event) {
    event.stopPropagation(); // Sayfanın başka bir yerine tıklayınca kapanmaması için
    document.getElementById("dropdownMenu").classList.toggle("show");
});

// Sayfanın başka bir yerine tıklanınca menüyü kapat
window.addEventListener("click", function(event) {
    if (!event.target.matches("#servicesBtn")) {
        document.getElementById("dropdownMenu").classList.remove("show");
    }
});

let currentDot = 0;
const dots = document.querySelectorAll('.dot');
const hero = document.querySelector('.hero');

function changeBackground() {
    // Dots'ları güncelle
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentDot].classList.add('active');

    // Arka plan resmini değiştir
    const images = [
        'https://raw.githubusercontent.com/sareyikama/sareyikamawebsite/refs/heads/main/images/test.jpeg',
        'https://raw.githubusercontent.com/sareyikama/sareyikamawebsite/refs/heads/main/images/otherimage1.jpg',
        'https://raw.githubusercontent.com/sareyikama/sareyikamawebsite/refs/heads/main/images/otherimage2.jpg',
        'https://raw.githubusercontent.com/sareyikama/sareyikamawebsite/refs/heads/main/images/otherimage3.jpg'
    ];
    hero.style.backgroundImage = `url('${images[currentDot]}')`;

    // currentDot'u güncelle
    currentDot = (currentDot + 1) % dots.length;
}

// Her 10 saniyede bir değişim yap
setInterval(changeBackground, 10000);

// İlk background'u başlat
changeBackground();
