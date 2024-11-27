document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const jumpUrl = params.get('url') || '#';
    const targetUrlElement = document.getElementById('targetUrl');
    const countdownElement = document.getElementById('countdown');
    const redirectButton = document.getElementById('redirectButton');
    
    targetUrlElement.textContent = jumpUrl;
    
    let countdown = 5;
    
    const timer = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;
        
        if (countdown <= 0) {
            clearInterval(timer);
            redirectButton.classList.add('visible');
        }
    }, 1000);
    
    redirectButton.addEventListener('click', () => {
        window.location.href = jumpUrl;
    });
});