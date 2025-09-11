// Loading Componets
async function loadComponents() {
    try {
        let headerHTML = '';
        try {
            const resp = await fetch('./components/header.html');
            if (resp.ok) {
                headerHTML = await resp.text();
            } else {
                const fallbackResp = await fetch('../components/header.html');
                headerHTML = await fallbackResp.text();
            }
        } catch (err) {
            console.error('Header not found in either location');
        }
        document.getElementById('header-container').innerHTML = headerHTML;

        // Loading Footer ...
        let footerHTML = '';
        try {
            const resp = await fetch('./components/footer.html');
            if (resp.ok) {
                footerHTML = await resp.text();
            } else {
                const fallbackResp = await fetch('../components/footer.html');
                footerHTML = await fallbackResp.text();
            }
        } catch (err) {
            console.error('Footer not found in either location');
        }
        document.getElementById('footer-container').innerHTML = footerHTML;

    } catch (error) {
        console.error("[ERROR] Loading components failed:", error);
    }

}


document.addEventListener('DOMContentLoaded', () => {
    loadComponents();
    
});
