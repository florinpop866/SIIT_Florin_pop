const ENUM = {
  rock: "rock",
  paper: "paper",
  scissors: "scissors",
  player: "player",
  ai: "ai",
  equality: "equality",
};

const render = (winner, aiChoise, PlayerChoise) => {
  document.getElementById("main").innerHTML =
    "Winner :" +
    winner +
    "<br/> ai : " +
    aiChoise +
    "<br/> player : " +
    PlayerChoise;
};

const play = () => {
  const PlayerChoise = document.getElementById("hand").value;
  const aiChoise = ai(); //salvam alegerea de la ai
  if (PlayerChoise === aiChoise) {
    return render(ENUM.equality, aiChoise, PlayerChoise);
  } else {
    if (PlayerChoise === ENUM.paper && aiChoise === ENUM.rock) {
      return render(ENUM.player, aiChoise, PlayerChoise);
    }
    if (PlayerChoise === ENUM.scissors && aiChoise === ENUM.paper) {
      return render(ENUM.player, aiChoise, PlayerChoise);
    }
    if (PlayerChoise === ENUM.rock && aiChoise === ENUM.scissors) {
      return render(ENUM.player, aiChoise, PlayerChoise);
    }
    return render(ENUM.ai, aiChoise, PlayerChoise);
  }
};

const ai = () => {
  const choise = Math.round(Math.random() * 2);
  switch (choise) {
    case 0:
      return ENUM.rock;
    case 1:
      return ENUM.paper;
    case 2:
      return ENUM.scissors;
  }
};

onload = () => {
    //<option value="rock">rock</option>
    //<option value="scissors">scissors</option>
    //<option value="paper">paper</option>
    const hand = document.getElementById('hand')
    const generateOption = (value,hand)=>{
        const temp = document.createElement('option')
        temp.value = value
        temp.innerHTML = value
        hand.append(temp)
    }
    generateOption(ENUM.paper,hand)
    generateOption(ENUM.rock,hand)
    generateOption(ENUM.scissors,hand)
}
