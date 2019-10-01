const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [
  ['f150'],
  ['corolla'],
  ['camaro']
];
console.log(carsByMake);

// Help with inference when extracting values
// const car = carMakers[0];
const myCar = carMakers.pop();
console.log("car: ", car);
console.log("myCar: ", myCar);
console.log("carMakers: ", carMakers);
// Prevent incompatible values
carMakers.push("100");

// Help with 'map'
carMakers.map((car1: string): string => {
  console.log("car1: ", car1.toUpperCase());
  return car1.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
importantDates.push("2020-10-10");
console.log(importantDates.pop());
console.log(importantDates);