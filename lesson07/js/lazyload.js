const images = document.querySelectorAll('[data-src]');

function preloadImage(img){
    const source = img.getAttribute('data-src');
    if(!source) {
        return;
    }
    img.src = source;
}

const options = {threshold: [.5]};

const io = new IntersectionObserver(
    (entries, io) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                preloadImage(entry.target); //target means it is targeting the entry img so shows the image 
                io.unobserve(entry.target); //stop observing 
            }
        });
    }, options
);

images.forEach(image => {
    io.observe(image);
});
