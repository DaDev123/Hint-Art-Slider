// Array of images
const images = [
    'img/a.png', 'img/bA.png', 'img/cA.png', 'img/dA.png', 'img/eA.png',
    'img/fA.png', 'img/gA.png', 'img/hA.png', 'img/jA.png', 'img/oA.png',
    'img/kA.png', 'img/lA.png', 'img/mA.png', 'img/nA.png', 'img/tA.png',
    'img/p.png', 'img/q.png', 'img/r.png', 'img/s.png',
    'img/uA.png', 'img/vA.png', 'img/wA.png', 'img/xA.png',
];
const lastImage = images.length - 1;
let currentImage = 0;

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
    const imageTag = document.getElementById('image');
    const infoTag = document.getElementById('info');

    if (nextBtn && prevBtn && imageTag && infoTag) {
        function changeImage(index) {
            // Start fade-out effect
            imageTag.style.opacity = '0';

            // After fade-out completes, change the image and fade in
            setTimeout(() => {
                currentImage = index;
                imageTag.src = images[currentImage];
                infoTag.innerHTML = (currentImage + 1) + '/23';

                // Start fade-in effect
                imageTag.style.opacity = '1';
            }, 500); // 500ms matches the CSS transition duration
        }

        // Next button functionality
        nextBtn.addEventListener('click', () => {
            const nextIndex = (currentImage + 1 > lastImage) ? lastImage : currentImage + 1;
            changeImage(nextIndex);
        });

        // Previous button functionality
        prevBtn.addEventListener('click', () => {
            const prevIndex = (currentImage - 1 < 0) ? 0 : currentImage - 1;
            changeImage(prevIndex);
        });
    }
});


// Ensure the code runs after the page loads
document.addEventListener('DOMContentLoaded', function() {
    const adminButton = document.getElementById('adminButton');

    if (adminButton) {
        adminButton.addEventListener('click', function() {
            const password = prompt("Enter ADMIN password:");
            if (password === "balls") {
                window.location.href = "admin.html"; // Redirect if the password is correct
            } else {
                alert("Incorrect password! Access denied.");
            }
        });
    }
});
