const earthGravity =  9.807
const jupiterGravity = 24.79
const saturnGravity = 10.44
const marsGravity = 3.71
const venusGravity = 8.87
const neptuneGravity = 11.15
const uranusGravity = 8.87
const mercuryGravity = 3.7

const img = document.querySelector(".img")
const mass = document.getElementById('mass').value
const btn = document.querySelector('.btn')
const noMass = document.querySelector(".no-mass")
const noPlanet =  document.querySelector(".no-planet")
const card =  document.querySelector(".card")

const planet = document.getElementById("planet")

planet.addEventListener("change", function handleChange(e){
    e.target.value;
    value = planet.options[planet.selectedIndex].value;
    text = planet.options[planet.selectedIndex].text;
})

let weight = 0;
btn.addEventListener('click', function(e){
    e.preventDefault()
    if(mass == null || mass == ""){
        card.style.display = "none"
        noMass.textContent  = "Mass Required"
    } 
    if(value == "earth"){
        weight = mass * earthGravity;
        img.classList.add("card-1");
        img.src = "images/earth.png";
        return weight
    } else if(value == "jupiter"){
        weight = mass * jupiterGravity;
        img.classList.add("card-1");
        img.src = "images/jupiter.png";
        return weight
    } else if(value == "neptune"){
        weight = mass * neptuneGravity;
        img.classList.add("card-1");
        img.src = "images/neptune.png";
    } else if(value == "saturn"){
        weight = mass * saturnGravity;
        img.src = "images/saturn.png";
        img.classList.add("card-1");
    } else if(value == "mercury"){
        weight = mass * mercuryGravity;
        img.classList.add("card-1");
        img.src = "images/mercury.png";
    } else if (value == "mars"){
        weight = mass * marsGravity;
        img.classList.add("card-1");
        img.src = "images/mars.png";
    } else if(value == "venus"){
        weight = mass * venusGravity;
        img.classList.add("card-1");
        img.src = "images/venus.png";
    } else if(value == "uranus"){
        weight = mass * uranusGravity;
        img.classList.add("card-1");
        img.src = "images/uranus.png"; 
    } else{
        card.style.display = "none"
    }
    return alert(weight)      
})
