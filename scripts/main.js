// scripts/main.js
async function loadComponents() {
    try {
        // For GitHub: use absolute path with repo name
        // For Local: use relative path based on current location
        let headerPath;
        if (SITE_CONFIG.isGitHub) {
            headerPath = `${SITE_CONFIG.basePath}components/header.html`;
        } else {
            // Calculate relative path for local development
            const pathSegments = window.location.pathname.split('/').filter(segment => segment);
            const depth = pathSegments.length - 1;
            headerPath = '../'.repeat(Math.max(0, depth)) + 'components/header.html';
        }
        
        const headerResp = await fetch(headerPath);
        if (headerResp.ok) {
            let headerHTML = await headerResp.text();
            
            // Process only INTERNAL paths in header (not external URLs)
            headerHTML = headerHTML.replace(/(href|src)="((?!http|https|#|mailto:)[^"]*)"/g, (match, attr, path) => {
                if (SITE_CONFIG.isGitHub) {
                    // GitHub: convert to absolute path with repo name
                    return `${attr}="${SITE_CONFIG.basePath}${path}"`;
                } else {
                    // Local: convert to absolute paths
                    return `${attr}="/${path}"`;
                }
            });
            
            document.getElementById('header-container').innerHTML = headerHTML;
        }
    } catch (err) {
        console.error('Failed to load header:', err);
    }
}

document.addEventListener('DOMContentLoaded', loadComponents);