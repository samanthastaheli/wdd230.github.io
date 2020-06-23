//menu

function toggleMenu() {
    var hambutton = document.querySelector('.ham');
    var mainnav = document.querySelector('.navigation')
    document.getElementsByClassName('navigation')[0].classList.toggle('responsive');
}

//current date
var wnames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var mnames = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var mydate = new Date();
var week = wnames[mydate.getDay()];
var month = mnames[mydate.getMonth()];
var output = week + ", " + mydate.getDate() + " " + month + " " + mydate.getFullYear();

document.getElementById('currentdate').textContent = output;

// if (week = 'Sunday') {
//     document.getElementById("friday").style.display = "block";
// }

//lazy load images
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
