const prompt = require("prompt-sync")();

const name = prompt("tell me your name: ");

console.log(
  `i think your name is ${name.toUpperCase()} right? Let's get into the game..`
);

const shoulWePlay = function () {
  decision = prompt("Do you want to play (Yes/No): ").toLowerCase();
  return decision;
};

var choice;

while (true) {
  choice = shoulWePlay();

  if (choice === "yes") {
    console.log("Really....Let's start the game...!");
    break;
  } else if (choice === "no") {
    console.log("Ok See you later...");
    break;
  } else {
    console.log("Tell me are you ready to play or not?");
  }
}
