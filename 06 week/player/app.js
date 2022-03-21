const gameContainer = document.getElementById("gameContainer");
const player = document.getElementById("player");

var topGameContainer = gameContainer.offsetTop;
var leftGameContainer = gameContainer.offsetLeft;
var widthGameContainer = gameContainer.offsetWidth;
var heightGameContainer = gameContainer.offsetHeight;
document.addEventListener("keydown", function (e) {
  if (e.code == "ArrowDown") {
    var top = player.offsetTop + 10;
    if (top + player.offsetHeight < topGameContainer + heightGameContainer) {
      top = top + "px";
      player.style.top = top;
    }
  }

  if (e.code == "ArrowLeft") {
    var left = player.offsetLeft - 10;
    if (left > leftGameContainer) {
      left = left + "px";
      player.style.left = left;
    }
  }

  if (e.code == "ArrowUp") {
    var up = player.offsetTop - 10;
    if (up > topGameContainer) {
      up = up + "px";
      player.style.top = up;
    }
  }

  if (e.code == "ArrowRight") {
    var rithgt = player.offsetLeft + 10;
    if (rithgt + player.offsetWidth < leftGameContainer + widthGameContainer) {
      rithgt = rithgt + "px";
      player.style.left = rithgt;
    }
  }
});

