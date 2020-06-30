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

if (week == 'Friday') {
    document.getElementById("friday").style.display = "block";
}