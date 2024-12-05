
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const captionText = document.getElementById('caption');
const closeBtn = document.getElementById('close');


const thumbnails = document.querySelectorAll('.thumbnail');


thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function(event) {
        event.preventDefault(); 
        lightbox.style.display = 'block'; 
        lightboxImage.src = this.href; 
        captionText.innerHTML = this.children [0].alt; 
    });
});


closeBtn.addEventListener('click', function() {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox) {
        lightbox.style.display = 'none'; 
    }
});
