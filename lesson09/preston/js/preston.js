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

if (week = 'Sunday') {
    document.getElementById("friday").style.display = "block";
}

// wind chill
wind= parseInt(document.getElementById('wind').textContent);
temp= parseInt(document.getElementById('temp').textContent);

chill=Math.round((0.0817*(3.71*(Math.pow(wind, 0.5))+
5.81-0.25*wind)*(temp-91.4)+91.4));

document.getElementById('chill').textContent = chill;