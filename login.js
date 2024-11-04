document.addEventListener('DOMContentLoaded', function() {
    const applyButton = document.querySelector('.apply-button');

    applyButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor click behavior
        window.location.href = 'apply.html'; // Redirect to apply.html
    });
});
