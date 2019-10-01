const today = new Date();
today.getMonth();

const user: person = {
  age: 20,
  firstName: "Tim",
  lastName: "LeForge",
  birthDate: new Date("1965-05-24")
}

type person = {
  age: number
  firstName: string
  lastName: string
  birthDate: Date
}