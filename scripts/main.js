// // scripts/main.js
// async function loadComponents() {
//     try {
//         // For GitHub: use absolute path with repo name
//         // For Local: use relative path based on current location
//         let headerPath;
//         if (SITE_CONFIG.isGitHub) {
//             headerPath = `${SITE_CONFIG.getBasePath()}components/header.html`;
//         } else {
//             // Calculate relative path for local development
//             const pathSegments = window.location.pathname.split('/').filter(segment => segment);
//             const depth = pathSegments.length - 1; // minus 1 because path starts with empty string
//             headerPath = '../'.repeat(Math.max(0, depth)) + 'components/header.html';
//         }
        
//         const headerResp = await fetch(headerPath);
//         if (headerResp.ok) {
//             let headerHTML = await headerResp.text();
            
//             // Process all paths in header
//             headerHTML = headerHTML.replace(/(href|src)="([^"]*)"/g, (match, attr, path) => {
//                 // Skip external URLs and anchors
//                 if (path.startsWith('http') || path.startsWith('#') || path.startsWith('mailto:')) {
//                     return match;
//                 }
                
//                 if (SITE_CONFIG.isGitHub) {
//                     // GitHub: convert to absolute path with repo name
//                     if (path.startsWith('/')) {
//                         return `${attr}="${SITE_CONFIG.getBasePath()}${path.slice(1)}"`;
//                     } else {
//                         return `${attr}="${SITE_CONFIG.getBasePath()}${path}"`;
//                     }
//                 } else {
//                     // Local: ensure paths work from any location
//                     if (path.startsWith('/')) {
//                         return `${attr}="${path}"`; // Keep absolute paths
//                     } else {
//                         // For relative paths in header, they need to be relative to the page, not header.html location
//                         // This is complex, so let's convert them to absolute
//                         const absolutePath = path.startsWith('../') ? path : `../${path}`;
//                         return `${attr}="${absolutePath}"`;
//                     }
//                 }
//             });
            
//             document.getElementById('header-container').innerHTML = headerHTML;
//         }
//     } catch (err) {
//         console.error('Failed to load header:', err);
//     }
// }

// document.addEventListener('DOMContentLoaded', loadComponents);


// scripts/main.js
async function loadComponents() {
    try {
        // Calculate correct path to components based on current page depth
        const pathDepth = window.location.pathname.split('/').length - 2;
        const basePath = '../'.repeat(Math.max(0, pathDepth)) || './';
        
        const headerResp = await fetch(`${basePath}components/header.html`);
        if (headerResp.ok) {
            let headerHTML = await headerResp.text();
            
            // Convert all relative paths in header to absolute paths
            headerHTML = headerHTML.replace(/(href|src)="\.\.\/([^"]*)"/g, '$1="/$2"');
            
            document.getElementById('header-container').innerHTML = headerHTML;
        }
    } catch (err) {
        console.error('Failed to load header:', err);
    }
}

document.addEventListener('DOMContentLoaded', loadComponents);