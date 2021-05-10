let gameArray = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let count = 0;
while (count < 4) {
  let x = Math.round(Math.random() * 2);
  let o = Math.round(Math.random() * 2);
  let x1 = Math.round(Math.random() * 2);
  let o1 = Math.round(Math.random() * 2);
  if (gameArray[x][o] === 0) {
    if (gameArray[x1][o1] === 0 && x !== x1) {
      gameArray[x][o] = "X";
      gameArray[x1][o1] = "O";
      count++;
    }
  }
}
for (let i = 0; i < gameArray.length; i++) {
  for (let j = 0; j < gameArray[i].length; j++) {
    if (gameArray[i][j] === 0) {
      gameArray[i][j] = "X";
    }
  }
}
console.log(gameArray);
function winner() {
  for (let i = 0; i < gameArray.length; i++) {
    for (let j = 0; j < gameArray[i]; j++) {
      if (((gameArray[j][0] === gameArray[j][1]) === gameArray[j][2]) === "X") {
        return "Player 1 won";
      } else if (
        ((gameArray[j][0] === gameArray[j][1]) === gameArray[j][2]) ==="O") {
        return "Player 2 won";
      } else {
        return "Draw";
      }
    }
    for (let j = 0; j < gameArray[i].length; j++) {
      if (((gameArray[0][j] === gameArray[1][j]) === gameArray[2][j]) === "X") {
        return "Player 1 won";
      } else if (
        ((gameArray[0][j] === gameArray[1][j]) === gameArray[2][j]) === "O") {
        return "Player 2 won";
      } else {
        return "Draw";
      }
    }
    for (let j = 0; j < gameArray[i].length; j--) {
      if (
        ((gameArray[j][0] === gameArray[1][j + 1]) === gameArray[2][j + 2]) === "X") {
        return "Player 1 won";
      } else if (
        ((gameArray[j][0] === gameArray[1][j + 1]) === gameArray[2][j + 2]) === "O") {
        return "Player 2 won";
      } else {
        return "Draw";
      }
    }
  }
}

console.log(winner());
