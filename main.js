//current year
            var n = new Date();
            var y = n.getFullYear();
            document.getElementById("currentyear").textContent = y ;

            //modified date
            
            var options = { month: "numeric", day: "numeric", year: "numeric", time: "numeric"};
            var d = new Date().toLocaleDateString("en-US", options);
            document.getElementById("modified").textContent = d ;