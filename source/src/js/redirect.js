export function initRedirect() {
    const params = new URLSearchParams(window.location.search);
    const jumpUrl = params.get('url') || '#';
    const targetUrlElement = document.getElementById('targetUrl');
    
    targetUrlElement.textContent = jumpUrl;
    
    return jumpUrl;
}