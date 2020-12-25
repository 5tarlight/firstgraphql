interface Person {
  id: number,
  name: string,
  age: number,
  gender: string,
}

export const people = [
  {
    id: 0,
    name: 'kks1',
    age: 17,
    gender: 'female'
  },
  {
    id: 1,
    name: 'kks2',
    age: 17,
    gender: 'female'
  },
  {
    id: 2,
    name: 'kks3',
    age: 17,
    gender: 'female'
  },
  {
    id: 3,
    name: 'kks4',
    age: 17,
    gender: 'female'
  },
  {
    id: 4,
    name: 'kks5',
    age: 17,
    gender: 'female'
  },
  {
    id: 5,
    name: 'kks6',
    age: 17,
    gender: 'female'
  },
];

export const getById = (id: number): Person => {
  const filteredPeople = people.filter(person => id === person.id);
  return filteredPeople[0]
}
