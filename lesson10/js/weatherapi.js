const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=c21eca0cc0374d7cba7443b1b69fb545"

fetch(apiURL) 
    .then((response) => response.json())
    .then((jsonObject) => {
        console.log(jsonObject); 

        let k = document.textContent = jsonObject.main.temp;
        let t = parseFloat(k);
        let temp = Math.round(t * 9 / 5 - 459.76);

        document.getElementById('current-temp').textContent = temp;

        const imagesrc = 'https://openweathermap.org/img/w/' + jsonObject.weather[0].icon + '.png';
        const desc = jsonObject.weather[0].description;
        
        document.getElementById('imagesrc').textContent = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('alt', desc);
    });

