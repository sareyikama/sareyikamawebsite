document.addEventListener("DOMContentLoaded", function () {
    const dots = document.querySelectorAll(".dot");
    
    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            document.querySelector(".dot.active").classList.remove("active");
            dot.classList.add("active");
        });
    });
});

document.getElementById("servicesBtn").addEventListener("click", function() {
    document.getElementById("dropdownMenu").classList.toggle("show");
});

// Sayfanın başka bir yerine tıklanınca menüyü kapat
window.onclick = function(event) {
    if (!event.target.matches("#servicesBtn")) {
        document.getElementById("dropdownMenu").classList.remove("show");
    }
};

const backgroundImages = [
    "https://raw.githubusercontent.com/sareyikama/sareyikamawebsite/refs/heads/main/images/test.jpeg",
    "https://raw.githubusercontent.com/sareyikama/sareyikamawebsite/refs/heads/main/images/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202025-01-20%20141943.png",
    "https://raw.githubusercontent.com/sareyikama/sareyikamawebsite/refs/heads/main/images/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202025-01-21%20175128.png"
];

let currentIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = `url('${backgroundImages[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % backgroundImages.length;
}

changeBackground(); // İlk resmi ayarla
setInterval(changeBackground, 10000); // Her 10 saniyede bir değiştir
