// scripts/main.js
async function loadComponents() {
    try {
        // Always use absolute path for components
        const headerPath = SITE_CONFIG.isGitHub ? 
            `${SITE_CONFIG.basePath}components/header.html` : 
            '/components/header.html';
            
        const headerResp = await fetch(headerPath);
        if (headerResp.ok) {
            let headerHTML = await headerResp.text();
            
            // Fix ALL paths in header for GitHub Pages
            if (SITE_CONFIG.isGitHub) {
                headerHTML = headerHTML.replace(/(href|src)="([^"]*)"/g, (match, attr, path) => {
                    // Don't modify external URLs
                    if (path.startsWith('http')) return match;
                    // Don't modify absolute paths that are already correct
                    if (path.startsWith('/')) return match;
                    // Prepend basePath to all relative paths
                    return `${attr}="${SITE_CONFIG.basePath}${path}"`;
                });
            }
            
            document.getElementById('header-container').innerHTML = headerHTML;
        }
    } catch (err) {
        console.error('Failed to load header:', err);
    }
}

document.addEventListener('DOMContentLoaded', loadComponents);