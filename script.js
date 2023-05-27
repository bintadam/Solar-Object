const earthGravity =  9.807
const jupiterGravity = 24.79
const saturnGravity = 10.44
const marsGravity = 3.71
const venusGravity = 8.87
const neptuneGravity = 11.15
const uranusGravity = 8.87
const mercuryGravity = 3.7

const img = document.querySelector(".img")
const mass = document.getElementById('mass')
const btn = document.querySelector('.btn')
const noMass = document.querySelector("no-mass")
const noPlanet =  document.querySelector(".no-planet")

const planet = document.getElementById("planet")
const value = planet.value;
const text = planet.options[planet.selectedIndex].text

let weight = 0;
btn.addEventListener('click', function(e){
    e.preventDefault()
    if(mass == ""){
        noMass.textContent  = "No Mass"
    }  
    if(planet.value == "earth"){
        weight = mass * earthGravity;
        img.src = "images/earth.png";
        return weight
    } else if(planet.value == "jupiter"){
        weight = mass * jupiterGravity;
        img.src = "images/jupiter.png";
        return weight
    } else if(planet.value == "neptune"){
        weight = mass * neptuneGravity;
        img.src = "images/neptune.png";
    } else if(planet.value == "saturn"){
        weight = mass * saturnGravity;
        img.src = "images/saturn.png";
    } else if(planet.value == "mercury"){
        weight = mass * mercuryGravity;
        img.src = "images/mercury.png";
    } else if (planet.value == "mars"){
        weight = mass * marsGravity;
        img.src = "images/mars.png";
    } else if(planet.value == "venus"){
        weight = mass * venusGravity;
        img.src = "images/venus.png";
    } else if(planet.value == "uranus"){
        weight = mass * uranusGravity
        img.src = "images/uranus.png"; 
    } else{
        noPlanet.textContent = "You did not select any Planet"
    }
    return weight      
})
