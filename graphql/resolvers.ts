import { addPerson, deletePerson, getById, people } from './db';

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }: { id: number }) => getById(id),
  },
  Mutation: {
    addPerson: (
      _,
      { name, age, gender }: { name: string; age: number; gender: string },
    ) => addPerson(name, age, gender),
    deletePerson: (_, { id }: { id: number }) => deletePerson(id),
  },
};

export default resolvers;
