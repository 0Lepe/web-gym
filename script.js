// Seleccionamos todas las tarjetas de instalaciones y precios
const elementosAnimar = document.querySelectorAll('.card, .card-precio');

// Configuramos el observador
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        // Si la tarjeta ya es visible en la pantalla
        if (entrada.isIntersecting) {
            // Le agregamos la clase 'visible' para activar la animación CSS
            entrada.target.classList.add('visible');
            // Dejamos de observarla para que la animación no se repita al subir
            observador.unobserve(entrada.target);
        }
    });
}, {
    threshold: 0.15 // Se activa cuando el 15% de la tarjeta entra en pantalla
});

// Le indicamos al observador que vigile cada una de las tarjetas
elementosAnimar.forEach(elemento => {
    observador.observe(elemento);
});