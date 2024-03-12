function scrollToSection(sectionId) {
    let target = document.querySelector(sectionId);
    if (target) {
        // Obtén la posición del elemento objetivo
        let targetPosition = target.offsetTop;
        // Obtén la posición actual del scroll
        let startPosition = window.pageYOffset;
        // Calcula la distancia a desplazarse
        let distance = targetPosition - startPosition;
        // Duración de la animación en milisegundos
        let duration = 1000; // 1 segundo

        // Función de animación
        let start = null;
        window.requestAnimationFrame(function animateScroll(timestamp) {
            if (!start) start = timestamp;
            // Calcular el progreso de la animación
            let progress = timestamp - start;
            // Calcular la posición actual del scroll
            let currentPosition = progress / duration * distance + startPosition;
            // Desplazarse a la posición actual
            window.scrollTo(0, currentPosition);
            // Continuar la animación si no se ha alcanzado la duración
            if (progress < duration) {
                window.requestAnimationFrame(animateScroll);
            }
        });
    }
}


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./servwork.js')
    .then(reg => console.log('Registro de SW exitoso', reg))
    .catch(err => console.warn('Error al tratar de registrar el sw', err))
}