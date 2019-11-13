import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
import consola from 'consola';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  server.applyMiddleware({ app });

  await mongoose.connect('mongodb://mongo:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app.listen({ port: 4000 }, () => {
    consola.info(`🚀 Server ready at http://mongo:4000${server.graphqlPath}`);
  });
};

startServer();
