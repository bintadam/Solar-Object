const btn = document.querySelector('.btn');
const card =  document.querySelector(".card");
const img = document.querySelector(".img");
const form = document.querySelector(".my-form")

function calculate(){
    
    const planet = document.getElementById("planet").value;
    const mass = Number(document.getElementById('mass').value);

    let earthGravity =  9.807
    let jupiterGravity = 24.79
    let saturnGravity = 10.44
    let marsGravity = 3.71
    let venusGravity = 8.87
    let neptuneGravity = 11.15
    let uranusGravity = 8.87
    let mercuryGravity = 3.7
    
    if(!mass){
        img.style.display = "none"
        card.style.height = "15%"
        form.classList.add("no-mass")
        document.querySelector(".no-mass").textContent = "No mass, Mass is Required";
        object.style.display = "none"
    } else if(!planet){
        form.classList.add("no-mass")
        document.querySelector(".no-mass").textContent = "You did not choose a planet yet";
        card.style.height = "15%"
        img.style.display = "none"
        object.style.display = "none"
    }
    form.classList.add("object")
    switch(planet){
        case "Earth":
            weight = Math.trunc(mass * earthGravity);
            img.src = "images/earth.png";
            break;

        case "Jupiter":
            weight = Math.trunc(mass * jupiterGravity);
            img.src = "images/jupiter.png";
            break;

        case "Neptune":
            weight = Math.trunc(mass * neptuneGravity);
            img.src = "images/neptune.png";
            break;

        case "Saturn":
            weight = Math.trunc(mass * saturnGravity);
            img.src = "images/saturn.png";
            break;

        case "Mercury":
            weight = mass * mercuryGravity;
            img.src = "images/mercury.png";
            break;

        case "Mars":
            weight =Math.trunc(mass * marsGravity);
            img.src = "images/mars.png";
            break;

        case "Venus":
            weight = Math.trunc(mass * venusGravity);
            img.src = "images/venus.png";
            break;

        case "Uranus":
            weight = Math.trunc(mass * uranusGravity);
            img.src = "images/uranus.png"; 
            break;
    }
    
    img.style.position = "absolute"
    img.style.left = "4%"

    return document.querySelector(".object").textContent = `The weight of the object on ${planet} is \n ${weight}.00N`

}

btn.addEventListener("click", function(e){
    e.preventDefault();

    calculate()
})


