const btnSwitcher = document.querySelector('.btn-switcher');

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