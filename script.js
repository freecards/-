document.addEventListener('DOMContentLoaded', function() {
    // Select all gift card elements and the hero button
    const giftCards = document.querySelectorAll('.card');
    const heroBtn = document.querySelector('.call-to-action-btn');

    // This is the URL you want to redirect the user to
    const redirectURL = "https://lockedapp.org/cl/js/7j7kl9"; 

    // Function to redirect the user
    function redirectToWebsite() {
        // Redirects the user's browser to the specified URL
        window.location.href = redirectURL;
    }

    // Add a 'click' event listener to every gift card
    giftCards.forEach(card => {
        card.addEventListener('click', function(event) {
            // Prevent the default browser action
            event.preventDefault();
            
            // Redirect the user to the new website
            redirectToWebsite();
        });
    });

    // Add a 'click' event listener to the hero button
    if (heroBtn) {
        heroBtn.addEventListener('click', function(event) {
            event.preventDefault();
            redirectToWebsite();
        });
    }
});
