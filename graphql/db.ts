interface Person {
  id: number;
  name: string;
  age: number;
  gender: string;
}

export let people = [
  {
    id: 0,
    name: 'kks1',
    age: 13,
    gender: 'female',
  },
  {
    id: 1,
    name: 'kks2',
    age: 14,
    gender: 'female',
  },
  {
    id: 2,
    name: 'kks3',
    age: 15,
    gender: 'female',
  },
  {
    id: 3,
    name: 'kks4',
    age: 16,
    gender: 'female',
  },
  {
    id: 4,
    name: 'kks5',
    age: 17,
    gender: 'female',
  },
  {
    id: 5,
    name: 'kks6',
    age: 18,
    gender: 'female',
  },
];

export const getById = (id: number): Person => {
  const filteredPeople = people.filter((person) => id === person.id);
  return filteredPeople[0];
};

export const deletePerson = (id: number) => {
  const cleanedPeople = people.filter((person) => person.id !== id);

  if (people.length > cleanedPeople.length) {
    people = cleanedPeople;
    return true;
  } else {
    return false;
  }
};

export const addPerson = (name: string, age: number, gender: string) => {
  const newPerson = {
    id: people.length + 1,
    name,
    age,
    gender,
  };

  people.push(newPerson);
  return newPerson;
};
