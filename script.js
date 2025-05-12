window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.background = '#1a252f';
    } else {
        header.style.background = '#2c3e50';
    }
});
