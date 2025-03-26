document.addEventListener("DOMContentLoaded", function() {
    // Animación de desplazamiento suave para los enlaces del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();  // Evita el comportamiento por defecto del enlace
            const targetId = this.getAttribute('href');  // Obtiene el id del destino
            const targetElement = document.querySelector(targetId);  // Encuentra el elemento
            window.scrollTo({
                top: targetElement.offsetTop,  // Desplazamiento hacia el objetivo
                behavior: 'smooth'  // Desplazamiento suave
            });

            // Cierra el menú lateral después de hacer clic en un enlace
            closeNav();
        });
    });

    // Cerrar el menú lateral cuando se carga la página
    closeNav();  
});

// Función para abrir el menú lateral
function openNav() {
    const sideNav = document.getElementById("sideNav");
    sideNav.style.width = "250px";  // Abre el menú lateral
    sideNav.style.transition = "width 0.5s ease-in-out";  // Asegura transición suave
}

// Función para cerrar el menú lateral
function closeNav() {
    const sideNav = document.getElementById("sideNav");
    sideNav.style.width = "0";  // Cierra el menú lateral
    sideNav.style.transition = "width 0.5s ease-in-out";  // Asegura transición suave
}

// Animación de escalado para las imágenes de las habilidades
const skillIcons = document.querySelectorAll('.skill img');

skillIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.2)';
        icon.style.transition = 'transform 0.3s';
    });
    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1)';
    });
});

// Animación de escalado para todas las imágenes
const allImages = document.querySelectorAll('img');

allImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
        image.style.transition = 'transform 0.3s';
    });
    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});
