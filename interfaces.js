var printVehicle = function (vehicle) {
    console.log("Name: " + vehicle.name);
    console.log("Year: " + vehicle.year);
    console.log("Broken ?: " + vehicle.broken);
    console.log(vehicle.summary());
};
var oldCivic = {
    name: 'civic',
    year: new Date("2000-05-25 00:00:00"),
    broken: true,
    summary: function () {
        return "Name: " + this.name;
    }
};
printVehicle(oldCivic);
var drink1 = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary: function () {
        return "My drink has " + this.sugar + " grams of sugar";
    }
};
var printSummary = function (item) {
    console.log(item.summary());
};
// printSummary(oldCivic);
printSummary(drink1);
