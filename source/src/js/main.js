import { initCountdown } from './countdown.js';
import { initRedirect } from './redirect.js';

document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');
    const redirectButton = document.getElementById('redirectButton');
    const jumpUrl = initRedirect();
    
    initCountdown(countdownElement, redirectButton);
    
    redirectButton.addEventListener('click', () => {
        window.location.href = jumpUrl;
    });
});