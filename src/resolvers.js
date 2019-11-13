import Cat from './models/Cat';

export default {
  Query: {
    hello: () => 'hi',
    cats: () => Cat.find(),
  },
  Mutation: {
    createCat: async (parent, { name }) => {
      const kitty = new Cat({ name });
      await kitty.save();
      return kitty;
    },
  },
};
