const createPerson = (name, age) => {
  const person = {
    name: name,
    age: age
  }
  return person;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  // eslint-disable-next-line no-prototype-builtins
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  return people.map(person => {
    return person.age;
    })
};

const findByName = (name, people) => {
  return people.find(person => person.name === name);
};

const findHondas = cars => {
  return cars.filter(car => car.manufacturer === 'Honda');
};

const averageAge = people => {
  const totalAge = people.reduce((total, person) => total + person.age, 0);
  return totalAge / people.length;
};

const createTalkingPerson = (name, age) => {
  const person = {
    name,
    age,
    introduce(name) {
      return `Hi ${name}, my name is ${this.name} and I am ${this.age}!`;
    }
  };
  return person;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
