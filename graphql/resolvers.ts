import { getById, people } from "./db";

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }: { id: number }) => getById(id)
  }
};

export default resolvers;
