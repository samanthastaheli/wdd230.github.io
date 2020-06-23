const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const source = jsonObject['towns'];
        let towns = []
        j=0

        for (let i = 0; i < source.length; i++) {
            if (source[i].name == "Preston" || source[i].name == "Fish Haven" || source[i].name == "Soda Springs") {
                towns[j] = source[i]
                j++
            }
        }

        for (let i = 0; i < towns.length; i++ ) {
            let card = document.createElement('section');
            let div = document.createElement('div');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let photo = document.createElement('img');
        
            div.classList.add('textDiv'); 
            photo.setAttribute('src', 'img/' + towns[i].photo);
            h2.textContent = towns[i].name;
            h3.textContent = towns[i].motto;
            p1.textContent = 'Year Founded: ' + towns[i].yearFounded;
            p2.textContent = 'Population: ' + towns[i].currentPopulation;
            p3.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
            

            card.appendChild(photo);
            card.appendChild(div);
            div.appendChild(h2);
            div.appendChild(h3);
            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);
           
            document.querySelector('div.cards').appendChild(card);
        }
    })
    .catch(function (error){
        alert("Sorry the data is not available now.");
    })