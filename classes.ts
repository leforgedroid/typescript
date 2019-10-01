class Vehicle {
	constructor(public color: string) {}
	protected drive(): void {
		console.log('chugga');
	}
	honk(): void {
		console.log('beep!!');
	}
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
	constructor(public wheels: number, color: string) {
		super(color);
	}
	protected drive(): void {
		console.log('vroom');
	}
	startDrivingProcess(): void {
		this.drive();
		this.honk();
	}
}

const car = new Car(4, 'red');
car.startDrivingProcess();
