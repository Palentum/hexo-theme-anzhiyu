export function initCountdown(countdownElement, redirectButton) {
    let countdown = 5;
    
    const timer = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;
        
        if (countdown <= 0) {
            clearInterval(timer);
            redirectButton.classList.add('visible');
        }
    }, 1000);
}