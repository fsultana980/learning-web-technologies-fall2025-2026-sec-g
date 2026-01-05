let index = 0;
const slides = document.getElementById("slideBox");
const dots = document.querySelectorAll(".dot");

function showSlide(i){
    index = (i + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${index * (100 / totalSlides)}%)`;

    dots.forEach(dot => dot.classList.remove("active-dot"));
    dots[index].classList.add("active-dot");
}

function moveSlide(step){
    showSlide(index + step);
}

function currentSlide(i){
    showSlide(i);
}

// Auto slide every 4 seconds
setInterval(() => {
    moveSlide(1);
}, 4000);
