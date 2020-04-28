//current year
var n = new Date();
var y = n.getFullYear();
document.getElementById("currentyear").textContent = y ;

//modified date
var options = { month: "numeric", day: "numeric", year: "numeric", time: "long"};
var d = new Date().toLocaleDateString(options);
document.getElementById("modified").textContent = d ;