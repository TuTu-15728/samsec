
async function loadComponents() {
    // Determine base path based on current page location
    const isInPages = window.location.pathname.includes('/pages/');
    const basePath = isInPages ? '../' : './';
    
    try {
        const headerResp = await fetch(`${basePath}components/header.html`);
        if (headerResp.ok) {
            const headerHTML = await headerResp.text();
            document.getElementById('header-container').innerHTML = headerHTML;
        } else {
            console.error('Header not found');
        }
    } catch (err) {
        console.error('Failed to load header');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadComponents();
});