var character = document.getElementById("character");
var obstacle = document.getElementsByClassName("obstacle")[0];

function jump() {   
    if(!character.classList.contains("jumpAnimation")) {
        character.classList.add("jumpAnimation");
        setTimeout(function() {
            character.classList.remove("jumpAnimation");
        },500);
    }
}

var checkDead = setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    if(obstacleLeft < 20 && obstacleLeft > 0 && characterTop >= 130) {
        obstacle.style.animation = "none";
        alert("You Lose");
    }
}, 10);