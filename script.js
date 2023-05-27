const earthGravity =  9.807
const jupiterGravity = 24.79
const saturnGravity = 10.44
const marsGravity = 3.71
const venusGravity = 8.87
const neptuneGravity = 11.15
const uranusGravity = 8.87
const mercuryGravity = 3.7

const img = document.querySelector(".img")
const mass = document.querySelector('#mass')
const btn = document.querySelector('.btn')

const noMass = "No Mass"
const noPlanet = "You did not select any Planet"


btn.addEventListener('click', function(e){
    e.preventDefault()
    if(mass == ""){
        noMass
    }
    let weight = 0;
    for(let planet of document.querySelector('#planet').options){
        if(planet.value == "earth"){
            weight = Number(mass) * earthGravity;
            img.src = "images/earth.png";
        } else if(planet.value == "jupiter"){
            weight = Number(mass) * jupiterGravity;
            img.src = "images/jupiter.png";
        } else if(planet.value == "neptune"){
            weight = Number(mass) * neptuneGravity;
            img.src = "images/neptune.png";
        } else if(planet.value == "saturn"){
            weight = Number(mass) * saturnGravity;
            img.src = "images/saturn.png";
        } else if(planet.value == "mercury"){
            weight = Number(mass) * mercuryGravity;
            img.src = "images/mercury.png";
        } else if (planet.value == "mars"){
            weight = Number(mass) * marsGravity;
            img.src = "images/mars.png";
        } else if(planet.value == "venus"){
            weight = Number(mass) * venusGravity;
            img.src = "images/venus.png";
        } else if(planet.value == "uranus"){
            weight = Number(mass) * uranusGravity
            img.src = "images/uranus.png"; 
        } else{
            noPlanet
        }
        return weight
    }
})