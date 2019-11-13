import { gql } from 'apollo-server-express';

export default gql`
  type Query {
    hello: String!
    cats: [Cat!]!
  }
  type Cat {
    id: ID!
    name: String!
  }
  type Mutation {
    createCat(name: String!): Cat!
  }
`;
