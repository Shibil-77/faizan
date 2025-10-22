document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    const responseDiv = document.getElementById('response');
    
    fetch('path_to_your_php_file.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.text())
    .then(data => {
        if (data.includes('thank-you.html')) {
            window.location.href = 'thank-you.html';
        } else {
            responseDiv.textContent = data;
        }
    })
    .catch(error => {
        responseDiv.textContent = 'Error: ' + error.message;
    });
});