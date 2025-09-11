

async function loadComponents() {
    try {
        // Load header and footer in parallel
        const [headerResponse, footerResponse] = await Promise.allSettled([
            fetch('../components/header.html') || fetch('components/header.html'),
            fetch('../components/footer.html') || fetch('components/footer.html')
        ]);
        
        // Process header
        if (headerResponse.status === 'fulfilled' && headerResponse.value.ok) {
            document.getElementById('header-container').innerHTML = 
                await headerResponse.value.text();
        } else {
            console.error('Header not found');
            document.getElementById('header-container').innerHTML = 
                '<div>Header failed to load</div>';
        }
        
        // Process footer
        if (footerResponse.status === 'fulfilled' && footerResponse.value.ok) {
            document.getElementById('footer-container').innerHTML = 
                await footerResponse.value.text();
        } else {
            console.error('Footer not found');
            document.getElementById('footer-container').innerHTML = 
                '<div>Footer failed to load</div>';
        }
    } catch (error) {
        console.error("Loading components failed:", error);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    loadComponents();
    
});