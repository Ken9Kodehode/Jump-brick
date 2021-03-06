const character = document.getElementById("character");
const object = document.getElementById("object");
// Function
function jump() {
  if (character.classList != "jump") {
    character.classList.add("jump");

    setTimeout(function () {
      character.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  // get current character Y position
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

  // get current object X position
  let objectLeft = parseInt(
    window.getComputedStyle(object).getPropertyValue("left")
  );

  // detect collision
  if (objectLeft < 50 && objectLeft > 0 && characterTop >= 140) {
    // collision
    alert("Game Over!");
  }
}, 10);
// EventListener
document.addEventListener("keydown", function (event) {
  jump();
});
