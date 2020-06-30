// json

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=c21eca0cc0374d7cba7443b1b69fb545"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsonObject) => {
        console.log(jsonObject);

        //temp 
        let k = document.textContent = jsonObject.main.temp;
        let t = parseFloat(k);
        let temp = Math.round(t * 9 / 5 - 459.76);

        document.getElementById('temp').textContent = temp;

        document.getElementById('humidity').textContent = jsonObject.main.humidity;
        document.getElementById('wind').textContent = jsonObject.wind.speed;
        document.getElementById('current-weather').textContent = jsonObject.weather[0].description;

        // wind chill
        let wind = parseInt(document.getElementById('wind').textContent);
        let chill = Math.round((0.0817*(3.71*(Math.pow(wind, 0.5))+ 5.81-0.25*wind)*(temp-91.4)+91.4));

        document.getElementById('chill').textContent = chill;
    })

const apiFive = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=c21eca0cc0374d7cba7443b1b69fb545"

fetch(apiFive)
    .then((response) => response.json())
    .then((jsonObject) => {
        console.log(jsonObject);

        for(let i = 0; i < 5; i++) {
            tk = document.textContent = jsonObject.list[i].main.temp;
            temp = Math.round(tk * 9 / 5 - 459.76);
            document.getElementById('day' + i).textContent = temp;
        }
        
        // let one = document.textContent = jsonObject.list[1].main.temp;
        // let dayone = Math.round(one * 9 / 5 - 459.76);
        // document.getElementById('day1').textContent = dayone;

        // let two = document.textContent = jsonObject.list[2].main.temp;
        // let daytwo = Math.round(two * 9 / 5 - 459.76);
        // document.getElementById('day2').textContent = daytwo;

        // let three = document.textContent = jsonObject.list[3].main.temp;
        // let daythree = Math.round(three * 9 / 5 - 459.76);
        // document.getElementById('day3').textContent = daythree;

        // let four = document.textContent = jsonObject.list[4].main.temp;
        // let dayfour = Math.round(four * 9 / 5 - 459.76);
        // document.getElementById('day4').textContent = dayfour;

        for(let i = 0; i < 5; i++) {
            imagesrc = 'https://openweathermap.org/img/w/' + jsonObject.list[i].weather[0].icon + '.png';
            desc = jsonObject.list[i].weather[0].description;
        
            document.getElementById('icon' + i).setAttribute('src', imagesrc);
            document.getElementById('icon' + i).setAttribute('alt', desc);
        }
        
    })