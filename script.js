let petname = prompt("Name your pet.");

let happiness = 0;
let energy= 0;

for (let i = 1; i < 7; i++) {
  let action = prompt("feed, pet or walk?");
   if (action === "feed") {
    energy += 2;
  } else if (action === "pet") {
    happiness += 1;
  } else if (action === "walk") { 
     if (action === "walk" && energy === 0) {
        alert("not enough energy to enjoy a walk");
        happiness += 0;
        energy += 0;} 
     else {
        happiness += 2;
        energy -= 1;}
    }  
}

console.log(energy)
console.log(happiness)

console.log(petname + " has " + happiness  + " happiness and " + energy + " energy ")