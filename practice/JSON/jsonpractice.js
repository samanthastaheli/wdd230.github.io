// make an object 

// let pets = {
//     "name" : "Olly",
//     "breed" : "Cockapoo",
//     "age" : 3,
//     "color" : "gold",
//     "favorite_food" : ["hotdogs", "strawberries", "watermelon"]
// };

// let n = pets.name;
// let x = pets.favorite_food[1];

// alert(n);
// alert(x);

const url = "https://cit111byui.github.io/pets.json";

fetch(url) 
    .then(function (response) { //get data
        return response.json(); //convert data to JS Object
    })
    .then(function (jsonObject) { //once object is ready
        console.log(jsonObject); //show is in console
        const pets = jsonObject['pets'];
        
        for(let i = 0; i < pets.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let para = document.createElement('p'); // in lesson09 add one more para and an img

            h2.textContent = pets[i].name + ' is a ' + pets[i].species;
            para.textContent = pets[i].name + "'s favorite food is " + pets[i].food + '.';

            card.appendChild(h2);
            card.appendChild(para);
            document.querySelector('.info').appendChild(card);
        }

    })
    .catch(function (error){
        alert("Sorry the data is not available now.");
    })