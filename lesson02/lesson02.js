//current year
var n = new Date();
var y = n.getFullYear();
document.getElementById("currentyear").innerHTML = y ;

//modified date

var date = document.lastModified;
document.getElementById("modified").textContent = date;

// var options = { month: "numeric", day: "numeric", year: "numeric", hour: "numeric", minute: "numeric"};
// var d = document.lastModified().toLocaleDateString("en-US", options);
// document.getElementById("modified").textContent = d ;