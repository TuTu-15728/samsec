async function loadComponents() {
    const isInPages = window.location.pathname.includes('/pages/');
    const basePath = isInPages ? '../' : './';
    
    try {
        const headerResp = await fetch(`${basePath}components/header.html`);
        if (headerResp.ok) {
            let headerHTML = await headerResp.text();
            
            // Only fix for GitHub Pages
            if (window.location.hostname.includes('github.io')) {
                headerHTML = headerHTML.replace('src="../assets/logo/modified_logo.png"', 'src="/samsec/assets/logo/modified_logo.png"');
            }
            
            document.getElementById('header-container').innerHTML = headerHTML;
        }
    } catch (err) {
        console.error('Failed to load header');
    }
}


document.addEventListener('DOMContentLoaded', () => {
    loadComponents();
});