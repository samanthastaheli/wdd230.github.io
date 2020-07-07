const apiEvents = "https://byui-cit230.github.io/weather/data/towndata.json"

fetch(apiEvents)
    .then((response) => response.json())
    .then((jsonObject) => {
        console.log(jsonObject);
        const towns = jsonObject['towns']; 
        // const name = source['name'];
        // const fishHaven = name['fishHaven'];
        
        // for(let i = 0; i < source.length; i++) {
        //     if (source[i].name == "Fish Haven") {
        //         fish = source[i].events;
        //         // br = document.createElement('br');
        //         // bri = event.appendChild(br);
        //     }}

        for(let i = 0; i < 1; i++) {
            // if (source[i].name == "Fish Haven") {
            //     fishHaven = source[i].events;
            // }
            // let fishHaven = source['Fish Haven'].name;

            let event = document.createElement('section');
            let p = document.createElement('p');

            p.textContent = towns["name"][1]["events"][2];

            event.appendChild(p);
    
            document.querySelector('.events').appendChild(event);
        }  
    })