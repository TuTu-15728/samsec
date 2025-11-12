// scripts/config.js
const SITE_CONFIG = {
    isGitHub: window.location.hostname.includes('github.io'),
    basePath: window.location.hostname.includes('github.io') ? '/samsec/' : '/',
    repoName: 'samsec'
};

// const BASE_PATH = window.location.hostname.includes('github.io') ? '/samsec/' : '/';

// // Calculate dynamic base path for component loading
// SITE_CONFIG.getComponentBasePath = function() {
//     if (this.isGitHub) {
//         return this.basePath;
//     }
    
//     // For local server - calculate how many levels deep we are
//     const path = window.location.pathname;
//     const depth = path.split('/').length - 2; // -2 because path starts and ends with /
//     return '../'.repeat(depth) || './';
// };