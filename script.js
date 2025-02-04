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
