function updateHeight() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
}

window.addEventListener('resize', () => updateHeight());
window.addEventListener('orientationchange', () => updateHeight());

updateHeight();
