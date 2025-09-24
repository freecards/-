document.addEventListener('DOMContentLoaded', function() {
    // Select all gift card elements on the page
    const giftCards = document.querySelectorAll('.card');
    
    // Select the locker's overlay element
    const lockerOverlay = document.getElementById('locker-overlay');

    // This is where you will place the script from OGAds
    const ogadsLockerScript = `
    `;
    
    // Function to show the locker pop-up
    function showLocker() {
        // Make the locker visible
        lockerOverlay.style.display = 'flex';
        
        // This injects your OGAds script into the page so it can run
        const lockerCodeContainer = document.getElementById('ogads-locker-code');
        if (lockerCodeContainer) {
            lockerCodeContainer.innerHTML = ogadsLockerScript;

            // This part helps load the script correctly after the page has loaded
            const scriptTags = lockerCodeContainer.querySelectorAll('script');
            scriptTags.forEach(tag => {
                const newScript = document.createElement('script');
                if (tag.src) {
                    newScript.src = tag.src; // For external scripts
                } else {
                    newScript.innerHTML = tag.innerHTML; // For inline scripts
                }
                document.body.appendChild(newScript);
            });
        }
    }

    // Add a 'click' event listener to every gift card
    giftCards.forEach(card => {
        card.addEventListener('click', function(event) {
            // Prevent the default browser action
            event.preventDefault();
            
            // Call the function to show the locker
            showLocker();
        });
    });
});