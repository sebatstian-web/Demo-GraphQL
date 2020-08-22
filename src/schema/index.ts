import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import 'graphql-import-node'; // Enviar el contenido de un archivo .graphql

import typeDefs from './schema.graphql';
import resolvers from '../resolvers/resolversMap';

// Uniendo el Schema y los Resolvers
const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
