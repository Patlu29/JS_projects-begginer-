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
    console.log("Really....Let's start the game...!\n");
    console.log(
      "Now you're entered in a market which store you want explore...Select below"
    );
    while (true) {
      const shopList = [
        "Vegetable shop",
        "Jwellery shop",
        "Super market",
        "Shoe mart",
      ];
      console.table(shopList);
      const shopNo = parseInt(
        prompt("Which shop you want to go..? Enter(0-3) or Exit(any number): ")
      );
      if (shopNo < 0 || shopNo > 3) {
        break;
      } else if (shopNo === 0) {
        vegList = [
          "Tomato",
          "Potato",
          "Cauliflower",
          "Cucumber",
          "Onion",
          "Meat",
          "Milk",
        ];
        console.log("Today list.. Please select from below...");
        while (true) {
          console.table(vegList);
          const selectedVeg = parseInt(
            prompt("Which one you want..Enter(0-6) or Exit(any number): ")
          );
          if (selectedVeg === 6) {
            console.log(
              `\nthanks for visiting our shop...here's your ${vegList[
                selectedVeg
              ].toUpperCase()} and your bill is $10...`
            );
            break;
          } else if (selectedVeg >= 0 && selectedVeg <= 5) {
            console.log(
              `\nthanks for visiting our shop...here's your ${vegList[
                selectedVeg
              ].toUpperCase()} and your bill is $25...`
            );
            break;
          } else {
            console.log("\nThank you for visiting..");
            break;
          }
        }
      } else if (shopNo === 1) {
        console.log("Welcome to our Jwellery shop..! check below today price");
        const gold = {
          "one Kg": "$100",
        };
        while (true) {
          console.table(gold);
          const goldWeight = parseInt(
            prompt(
              "How many kg Gold you want... or Exit(enter negative numbers): "
            )
          );
          if (goldWeight > 0) {
            console.log(
              `\nthanks for visiting our shop...here's your ${goldWeight}KG gold and your bill is $${
                goldWeight * 100
              }...`
            );
            break;
          } else goldWeight < 0;
          console.log("Thanks for visiting...!");
          break;
        }
      }else if (shopNo === 2) {
        console.log("Welcome to our super market...! select below what you want...")
        const marketItems = ['Rice', 'Suger', 'weat', 'Incrediants']
        while (true) {
          console.table(marketItems)
          const itemSelected = parseInt(prompt("which one you want Enter(0-3) or Exit(any number): "))
          if (itemSelected >= 0 && itemSelected <= 3) {
            console.log(`Thanks for visiting us....here's your ${marketItems[itemSelected].toUpperCase()} and your bill is $100`)
            break
          }else {
            console.log("Thank you see you later...!")
            break
          }
        }
      }else if (shopNo === 3) {
        console.log("Welcom to PRAKASH shoe mart...! select your needs from below list..")
        const shoeList = {'0: Slipper': 80, '1: Casual': 150, '2: Office': 200, '3: Sports': 220}
        const shoe = ['Slipper', 'Casual', 'Office', 'Sports']
        while (true) {
          console.table(shoeList)
          const selectedItem = parseInt(prompt("Which model you want Enter(0-3) or Exit(any number): "))
          if (selectedItem >= 0 && selectedItem <= 3) {
            console.log(`Thanks for visiting us...here's your ${shoe[selectedItem]} Cheppal and your bill is $${shoeList[shoe[selectedItem]]}...`)
            break
          }else {
            console.log("Thank you see you later..!")
            break
          }
        }
      }
    }
  } else if (choice === "no") {
    console.log("Ok See you later...");
    break;
  } else {
    console.log("Tell me are you ready to play or not?");
  }
}
