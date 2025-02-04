document.addEventListener("DOMContentLoaded", function () {
    const dots = document.querySelectorAll(".dot");
    
    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            document.querySelector(".dot.active").classList.remove("active");
            dot.classList.add("active");
        });
    });
});
