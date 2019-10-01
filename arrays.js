var carMakers = ["ford", "toyota", "chevy"];
var dates = [new Date(), new Date()];
var carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
];
console.log(carsByMake);
// Help with inference when extracting values
var car = carMakers[0];
var myCar = carMakers.pop();
console.log("car: ", car);
console.log("myCar: ", myCar);
console.log("carMakers: ", carMakers);
// Prevent incompatible values
carMakers.push("100");
// Help with 'map'
carMakers.map(function (car1) {
    console.log("car1: ", car1.toUpperCase());
    return car1.toUpperCase();
});
// Flexible types
var importantDates = [new Date(), "2030-10-10"];
importantDates.push("2020-10-10");
console.log(importantDates.pop());
console.log(importantDates);
