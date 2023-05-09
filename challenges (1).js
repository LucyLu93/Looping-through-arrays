/*------------------
1)
The loop is currently printing
the index of the person array.
Switch it so it is printing
the values instead.
------------------*/
const person = ["Sofia", 30, "Barcelona", true];

//for (let i = 0; i < person.length; i++) {
//   console.log(i);
// //}

for (let value of person) {
  console.log(value);
}

/*------------------
2)
Write a loop that prints all
the values in pet.
------------------*/

const pet = ["Spot", 2, "dog", "spotted"];

for (let value of pet) {
  console.log(value);
}

/*------------------
3)
Create an array called "features" and
add at least four items to it.

Then, print all the features
in ONE statement instead of one at
a time. Using a loop, add each value
to the "carFeatures" string.

Bonus: add a comma between each feature
so it more closely resembles a real
sentence when it prints.
------------------*/
const features = ["red", "big", "landrover", "fivedoor"];
let carFeatures = "The features of the car are: ";

for (let values of features){
  carFeatures += values + ", ";
}

 console.log(carFeatures);

/*------------------
4)
Write a loop that prints all
the items in the nums array
backwards (ie: start with 10 and
end with 0).
------------------*/

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i=nums.length-1; i>=0; i--) {
    console.log(i);
}

/*------------------
5)
Create a nested loop that prints
the numbers in the gridNum array
in order.
------------------*/

let gridNum = [[1, 2, 3], [4, 5], [6, 7, 8, 9], [10]];

for (let row of gridNum){
  for (let num of row) {
    console.log(num);
  }
}
/*------------------
6)
Write a loop that prints
the Pokemon names.
------------------*/
const pokemon = [
  {
    pkdx_id: 1,
    name: "Bulbasaur",
    description:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    types: ["poison", "grass"],
  },
  {
    pkdx_id: 2,
    name: "Ivysaur",
    description:
      "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
    types: ["poison", "grass"],
  },
  {
    pkdx_id: 3,
    name: "Venusaur",
    description:
      "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
    types: ["poison", "grass"],
  },
  {
    pkdx_id: 4,
    name: "Charmander",
    description:
      "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
    types: ["fire"],
  },
];

let name1 = "";

for (let poke of pokemon) {
    name1 += poke.name + " ";
}

console.log(name1);

/*------------------
7)
Now, create a nested loop
that prints all the "types" from
the pokemon array.
------------------*/

for (let poke of pokemon) {
  for (let type of poke.types) {
  console.log(type);
  }
}

/*------------------
8)
Create a loop that prints
the letters in alphabetical
order (you will have to use
three nested loops to do this).

Try to do this WITHOUT looking at the slides.
------------------*/

let letters = [
  [["A"], ["B"], ["C"]],
  [["D"], ["E"], ["F"]],
  [["G"], ["H"], ["I"]],
];

for (let col of letters) {
  for (let line of col) {
    for (let letter of line)
    console.log(letter);
  }
}

/*------------------
9)
Create a nested loop to add each address
into the "allAddress" array. However,
instead of adding them in as objects, loop
through the objects to concatenate the values
into strings.

Your result should look like this:
["Carrer de CodeOp 42 Barcelona Spain", "Carrer de Tech 200 Madrid Spain", "Carrer de JSON Seville Spain"]

Hint: try creating a variable between the
loops to store each address string before
pushing it into the allAddress array.
------------------*/

let allAddress = [];

const addressList = [
  {
    line1: "Carrer de CodeOp",
    line2: 42,
    city: "Barcelona",
    country: "Spain",
  },
  {
    line1: "Carrer de Tech",
    line2: 200,
    city: "Madrid",
    country: "Spain",
  },
  {
    line1: "Carrer de JSON",
    line2: 22,
    city: "Seville",
    country: "Spain",
  },
];

for (let object of addressList) {
  let tempAd = "";
  for (let key in object) {
  tempAd += object[key] + " ";
  }
  allAddress.push(tempAd);
}

console.log(allAddress);

/*------------------
10)
Create a to do list for each
day of the week.

Your result should be an array called "toDoList"
of strings that looks like this:

["Sunday's chores are: nothing.", "Monday's chores are: tidying, vacuuming, dishes.", "Tuesday's chores are: nothing.", (etcetera)]

Hint: to accomplish this, you will
need to combine a lot of the things you've
learned from previous activities. Go back
and look at them if you need help!
------------------*/

let daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let toDoList = "";
let chores = {
  monday: ["tidying", "vacuuming", "dishes"],
  wednesday: ["laundry", "bills"],
  friday: ["dusting", "lawncare"],
};

for(let day of daysOfWeek) {
    for(let houseWork in chores) {
        toDoList += day && houseWork + ",";
    }
    toDoList.push(toDoList);
}
console.log(toDoList);