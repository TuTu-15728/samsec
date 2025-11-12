// Load config first, then components
async function loadComponents() {
    const isInPages = window.location.pathname.includes('/pages/');
    const basePath = isInPages ? '../' : './';
    
    try {
        const headerResp = await fetch(`${basePath}components/header.html`);
        if (headerResp.ok) {
            let headerHTML = await headerResp.text();
            
            // Use the config for clean path handling
            if (SITE_CONFIG.isGitHub) {
                // Simple replacement using config
                headerHTML = headerHTML.replace(/(href|src)="\.\.\/([^"]*)"/g, `$1="${SITE_CONFIG.basePath}$2"`);
            }
            
            document.getElementById('header-container').innerHTML = headerHTML;
        }
    } catch (err) {
        console.error('Failed to load header:', err);
    }
}

document.addEventListener('DOMContentLoaded', loadComponents);