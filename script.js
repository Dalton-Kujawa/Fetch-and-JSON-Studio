// TODO: add code here
window.addEventListener("load", event=>{
    let container = document.getElementById("container");
fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(response =>response.json())
    .then(function(data){
console.log("here")
        for(let astronaut of data){
            console.log(astronaut);
            let htmlString = `
            <div class="astronaut">
                <div class="bio">
                    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                        <li>Hours in space: ${astronaut.hoursInSpace}</li>
                        <li>Active: ${astronaut.active}</li>
                        <li>Skills: ${astronaut.skills.join(', ')}</li>
                    </ul>
                </div>
                <img class="avatar" src="${astronaut.picture}">
            </div>
            `
            container.innerHTML+= htmlString;
        }
    })
})


