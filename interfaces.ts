interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date("2000-05-25 00:00:00"),
  broken: true,
  summary(): string {
    return (
      `Name: ${this.name}
       Year: ${this.year}
       broken?: ${this.broken}`
    );

  }
}

export const drink1 = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
}

printSummary(oldCivic);
printSummary(drink1);