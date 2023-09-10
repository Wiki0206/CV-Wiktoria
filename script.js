// Pobieranie wszystkich sekcji, które mają podpunkty
const sectionsWithSubpoints = document.querySelectorAll('section');

// Dodawanie nasłuchiwania na kliknięcie w sekcję
sectionsWithSubpoints.forEach(section => {
    section.addEventListener('click', () => {
        // Jeśli sekcja ma podpunkty, to przełącz ich widoczność
        const subpoints = section.querySelector('ul');
        if (subpoints) {
            subpoints.classList.toggle('visible');
        }
    });
});
