const btnSwitcher = document.querySelector('.btn-switcher');
const ham = document.querySelector('.ham');
const menu = document.querySelector('.menu');

(function () {
    if (window.innerWidth <= 640 || !menu.contains(btnSwitcher)) {
        menu.appendChild(btnSwitcher);
    }
})();

ham.addEventListener('click', function () {
    showMenu();
    toggleHam();
})

btnSwitcher.addEventListener('click', function () {
    toggleActive();
    toggleTheme();
});

function toggleActive() {
    const switcherOptions = [
        document.querySelector('.sun'),
        document.querySelector('.moon')
    ];

    switcherOptions[0].classList.toggle('active');
    switcherOptions[1].classList.toggle('active');
}

function toggleTheme() {
    const html = document.querySelector('html');
    html.classList.toggle('dark-mode');
}

function showMenu() {
    menu.classList.toggle('active');
}

function toggleHam() {
    ham.classList.toggle('active');
}

