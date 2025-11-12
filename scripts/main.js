async function loadComponents() {
    // Determine base path based on current page location
    const isInPages = window.location.pathname.includes('/pages/');
    const basePath = isInPages ? '../' : './';
    
    try {
        const headerResp = await fetch(`${basePath}components/header.html`);
        if (headerResp.ok) {
            const headerHTML = await headerResp.text();
            document.getElementById('header-container').innerHTML = headerHTML;
            
            // Fix logo path after header loads
            setTimeout(() => {
                const logos = document.querySelectorAll('.logo img');
                logos.forEach(logo => {
                    if (window.location.hostname.includes('github.io')) {
                        // GitHub Pages - use absolute path
                        logo.src = '/samsec/assets/logo/modified_logo.png';
                    } else {
                        // Local server - use relative path
                        logo.src = `${basePath}assets/logo/modified_logo.png`;
                    }
                });
            }, 50);
        } else {
            console.error('Header not found');
        }
    } catch (err) {
        console.error('Failed to load header:', err);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadComponents();
});