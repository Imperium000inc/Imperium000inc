document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("main-header");
    const navLinks = document.querySelectorAll(".nav-links a");
    const precios = document.querySelectorAll(".producto-precio");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const targetId = this.getAttribute("href");
                const targetPosition = document.querySelector(targetId).offsetTop - header.offsetHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    precios.forEach(precio => {
        precio.addEventListener("click", function() {
            // Acción a realizar cuando se hace clic en el precio
            console.log("Precio clickeado");
        });
    });

    if (window.innerWidth <= 768) {
        window.addEventListener("scroll", function() {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 100) {
                header.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
            } else {
                header.style.backgroundColor = "rgba(0, 0, 0, 0.9)"; // Cambiar el color del fondo según tu preferencia
            }
        });
    }
    
    const prevBtn = document.querySelector('.product-prev-btn');
    const nextBtn = document.querySelector('.product-next-btn');
    const images = document.querySelectorAll('.product-images-container img');
    let currentImageIndex = 0;

    function showImage(index) {
        images.forEach(image => image.style.display = 'none');
        images[index].style.display = 'block';
    }

    showImage(currentImageIndex);

    prevBtn.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
        showImage(currentImageIndex);
    });

    nextBtn.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
        showImage(currentImageIndex);
    });
});
