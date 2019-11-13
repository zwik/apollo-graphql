const Cat = require('./models/Cat');

module.exports = {
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
