document.addEventListener("scroll", function() {
    const mvvWrapper = document.querySelector('.mvv-wrapper');
    const rect = mvvWrapper.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Check if the element is within the viewport
    if (rect.top <= windowHeight && rect.bottom >= 0) {
        mvvWrapper.classList.add('animate');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it has animated
            }
        });
    });

    cards.forEach(card => {
        observer.observe(card);
    });
});
