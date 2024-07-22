console.log("Start");
let userName = "Nabeel Ali";
console.log(userName);
let age = 27;
if (age < 18) {
    console.log("You are not an adult");
}
else {
    console.log("You are an adult");
}
;
const bestFriends = [
    "Sangeen",
    "Saad",
    "Suleman",
    "Mahar"
];
for (let i = 0; i < bestFriends.length; i++) {
    console.log(`${bestFriends[i]} is my bestfriend`);
}
;
const car = {
    brand: "Audi",
    model: "E Tron",
    isUsed: false,
    year: 2024
};
console.log(car["brand"]);
console.log(car.model);
console.log("The end");
export {};
