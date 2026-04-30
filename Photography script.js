document.addEventListener("DOMContentLoaded", function() {
    const studioTitle = document.querySelector("h1");
    const slogan = document.querySelector("h2");

    // 1. H1 Focus
    setTimeout(() => {
        if(studioTitle) studioTitle.classList.add("reveal-focus");
    }, 200);

    // 2. H2 Sweep starts
    setTimeout(() => {
        if(slogan) {
            slogan.classList.add("shine-sweep");
            
            // 3. NEW: Wait 3 seconds (the length of the sweep) 
            // then switch back to solid color
            setTimeout(() => {
                slogan.classList.add("shine-finished");
            }, 3000); 
        }
    }, 1800); 
});
//Interactions for Gallery page
// 1. Find all the photos on the page
const photos = document.querySelectorAll('.photo img');

// 2. Create the "pop-out" element (the Lightbox) in our heads
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

// 3. Listen for a click on any photo
photos.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.classList.add('active'); // Show the lightbox
        
        // Create the big version of the image
        const img = document.createElement('img');
        img.src = image.src;
        
        // Clear the lightbox and add the new image
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    });
});

// 4. Click the background to close it
lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});