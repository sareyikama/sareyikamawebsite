let currentDot = 0;
const dots = document.querySelectorAll('.dot');
const hero = document.querySelector('.hero');

// Arka plan resimlerini tanımla
const images = [
    'https://raw.githubusercontent.com/sareyikama/sareyikamawebsite/refs/heads/main/images/test.jpeg',
    'https://raw.githubusercontent.com/sareyikama/sareyikamawebsite/refs/heads/main/images/otherimage1.jpeg',
    'https://raw.githubusercontent.com/sareyikama/sareyikamawebsite/refs/heads/main/images/otherimage2.jpeg',
    'https://raw.githubusercontent.com/sareyikama/sareyikamawebsite/refs/heads/main/images/otherimage3.jpeg'
];

// Dots'ları tıklanabilir hale getirme
dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
        // Aktif noktayı güncelle
        document.querySelector(".dot.active").classList.remove("active");
        dot.classList.add("active");

        // Arka planı değiştirmek için
        currentDot = index; // Tıklanan noktaya göre index'i güncelle
        changeBackground(); // Background'u güncelle
    });
});

const changeBackground = () => {
    // Dots'ları güncelle
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentDot].classList.add('active');

    // Arka plan resmini değiştir
    hero.style.backgroundImage = `url('${images[currentDot]}')`;
};

// İlk background'u başlat
changeBackground();

// 10 saniyede bir arka planı değiştir
const backgroundInterval = setInterval(() => {
    currentDot = (currentDot + 1) % images.length;
    changeBackground();
}, 10000);
