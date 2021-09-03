let petname = prompt("Name your pet.");

let happiness = 0;
let energy= 0;

let action = prompt("feed, pet or walk?")
for (let i = 1; i < 6; i++)
  if (action == "feed"); {
    energy += 2;}
  if (action == "pet"); {
    happiness += 1;}
  if (action == "walk"); {
    happiness += 2;
    energy -= 1;}

  while (action == "walk" && energy === 0); {
  happiness += 0;
  energy += 0;}  

  
console.log(energy)
console.log(happiness)


console.log(petname + ' ' + "has" + ' ' + happiness + ' ' + "happiness" + ' ' + "and" + ' ' + energy + ' ' + "energy");
