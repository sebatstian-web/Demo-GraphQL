import { IResolvers } from 'graphql-tools';

import { db } from '../data/data.store';

// Proporcionando las respuestas a las queries
const query: IResolvers = {
  Query: {
    estudiantes(): any {
      return db.estudiantes;
    },
  },
};

export default query;
