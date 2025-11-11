// Loading Componets
// async function loadComponents() {
//     try {
//         let headerHTML = '';
//         try {
//             const resp = await fetch('./components/header.html');
//             if (resp.ok) {
//                 headerHTML = await resp.text();
//             } else {
//                 const fallbackResp = await fetch('../components/header.html');
//                 headerHTML = await fallbackResp.text();
//             }
//         } catch (err) {
//             console.error('Header not found in either location');
//         }
//         document.getElementById('header-container').innerHTML = headerHTML;

//         // Loading Footer ...
//         let footerHTML = '';
//         try {
//             const resp = await fetch('./components/footer.html');
//             if (resp.ok) {
//                 footerHTML = await resp.text();
//             } else {
//                 const fallbackResp = await fetch('../components/footer.html');
//                 footerHTML = await fallbackResp.text();
//             }
//         } catch (err) {
//             console.error('Footer not found in either location');
//         }
//         document.getElementById('footer-container').innerHTML = footerHTML;

//     } catch (error) {
//         console.error("[ERROR] Loading components failed:", error);
//     }

// }


// document.addEventListener('DOMContentLoaded', () => {
//     loadComponents();
    
// });


// Loading Components
async function loadComponents() {
    // Load Header
    let headerHTML = '';
    const headerResp1 = await fetch('components/header.html').catch(() => null);
    if (headerResp1 && headerResp1.ok) {
        headerHTML = await headerResp1.text();
    } else {
        const headerResp2 = await fetch('components/header.html').catch(() => null);
        if (headerResp2 && headerResp2.ok) {
            headerHTML = await headerResp2.text();
        } else {
            console.error('Header not found in both locations');
        }
    }
    document.getElementById('header-container').innerHTML = headerHTML;

    // Load Footer
    let footerHTML = '';
    const footerResp1 = await fetch('./components/footer.html').catch(() => null);
    if (footerResp1 && footerResp1.ok) {
        footerHTML = await footerResp1.text();
    } else {
        const footerResp2 = await fetch('../components/footer.html').catch(() => null);
        if (footerResp2 && footerResp2.ok) {
            footerHTML = await footerResp2.text();
        } else {
            console.error('Footer not found in both locations');
        }
    }
    document.getElementById('footer-container').innerHTML = footerHTML;
}

document.addEventListener('DOMContentLoaded', () => {
    loadComponents();
});