const inputName = document.getElementById("new-name");
const inputGender = document.getElementById("sex-select");
const inputHeight = document.getElementById("new-height");
const inputWeight = document.getElementById("new-weight");

function getBMI() {
  let newHeight = inputHeight.value;
  let newWeight = inputWeight.value;

  let getaBMI = newWeight / (newHeight * newHeight);
  let getBMI = Math.round(getaBMI * 100) / 100
  return getBMI;
}

function resultBMI() {
  if (getBMI() < 18.5) {
    return "UNDERWEIGHT";
  } else if (getBMI() >= 18.5 && getBMI() < 25) {
    return "NORMAL";
  } else if (getBMI() >= 25 && getBMI() < 30) {
    return "OVERWEIGHT";
  } else if (getBMI() >= 30) {
    return "OBESE";
  }
}

const newResult = document.createElement("ul");

function final() {
  let newName = inputName.value;
  let newGender = inputGender.value;
  let result = document.createElement("li");
  result.innerHTML = `${newName} | ${newGender} | ${getBMI()} | ${resultBMI()}`;

  newResult.appendChild(result);
}
document.body.appendChild(newResult);
