const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')
    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)

    const dots = document.querySelectorAll('#dot');
    dots.forEach(dot => {
        dot.addEventListener('click', function () {
            dots.forEach(dot => {
                dot.classList.remove('active-dot');
            });
            this.classList.add('active-dot');
        });
    });

    const toggleButton1 = document.getElementById('toggleButton1');
    const hiddenText1 = document.getElementById('hiddenText1');
    const toggleButton2 = document.getElementById('toggleButton2');
    const hiddenText2 = document.getElementById('hiddenText2');

    toggleButton1.addEventListener('click', function () {
        if (hiddenText1.style.display === 'none') {
            hiddenText1.style.display = 'block';
            hiddenText1.scrollIntoView({ behavior: 'smooth' });
        } else {
            hiddenText1.style.display = 'none';
        }
    });
    toggleButton2.addEventListener('click', function () {
        if (hiddenText2.style.display === 'none') {
            hiddenText2.style.display = 'block';
            hiddenText2.scrollIntoView({ behavior: 'smooth' });
        } else {
            hiddenText2.style.display = 'none';
        }
    });
}
document.addEventListener('DOMContentLoaded', initApp)

function toggleActive(button, galleryId) {
    const carButtons = document.querySelectorAll('#btn');
    carButtons.forEach(function (btn) {
        btn.classList.remove('text-dark-blue');
        btn.classList.remove('underline');
        btn.classList.remove('font-semibold');
        btn.classList.add('text-black-800');
    });

    button.classList.add('text-dark-blue');
    button.classList.add('underline');
    button.classList.add('font-semibold');
    showGallery(galleryId);
}
function showGallery(galleryId) {
    document.querySelectorAll('.gallery').forEach(gallery => {
        gallery.classList.add('hidden');
    });
    document.getElementById(galleryId).classList.remove('hidden');
    document.getElementById(galleryId).scrollIntoView({ behavior: 'smooth' });
}