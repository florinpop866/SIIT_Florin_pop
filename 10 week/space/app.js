class Ship {
  constructor() {
    this.active = false;
  }

  createHtmlShip() {
    const shipImg = document.createElement("img");
    shipImg.src = `./ships/${randomShipColor()}.png`;
    shipImg.style.width = "50px";
    shipImg.style.marginTop = "5px";
    shipImg.style.display = "block";
    return shipImg;
  }

  showShipOnUi(parent) {
    this.shipEl = this.createHtmlShip();
    this.shipEl.style.position = "relative";
    this.shipEl.style.left = "0px";
    this.shipEl.style.top = "0px";
    parent.append(this.shipEl);
    this.clickEventOnShip();
  }

  clickEventOnShip() {
    this.shipEl.addEventListener("click", () => {
      this.shipEl.style.background = "grey";
      this.active = !this.active;
      this.shipEl.style.background = this.active ? "grey" : "none";
    });
  }

  moveUp() {
    if (this.active) {
      const top = parseInt(this.shipEl.style.top, 10);
      this.shipEl.style.top = top - 10 + "px";
    }
  }

  moveDown() {
    if (this.active) {
      const top = parseInt(this.shipEl.style.top, 10);
      this.shipEl.style.top = top + 10 + "px";
    }
  }

  moveRight() {
    if (this.active) {
      const left = parseInt(this.shipEl.style.left, 10);
      this.shipEl.style.left = left + 10 + "px";
    }
  }

  moveLeft() {
    if (this.active) {
      const left = parseInt(this.shipEl.style.left, 10);
      this.shipEl.style.left = left - 10 + "px";
    }
  }
}
const generateRandomShip = () => {
  const btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    console.log(spaceShipsList);
    const ship1 = new Ship();
    const list = [ship1];
    spaceShipsList.push(ship1);
    list.forEach((ship) => ship.showShipOnUi(document.body));
  });
};
generateRandomShip();

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowRight":
      console.log(event);
      spaceShipsList.forEach((shipEl) => shipEl.moveRight());
      break;
    case "ArrowUp":
      spaceShipsList.forEach((shipEl) => shipEl.moveUp());
      break;
    case "ArrowDown":
      spaceShipsList.forEach((shipEl) => shipEl.moveDown());
      break;
    case "ArrowLeft":
      spaceShipsList.forEach((shipEl) => shipEl.moveLeft());
  }
});

spaceShipsList = [];

const randomShipColor = () => {
  const shipColor = ["blue", "red", "green"];

  console.log(shipColor[Math.floor(Math.random() * 3)]);
  return shipColor[Math.floor(Math.random() * 3)];
};
