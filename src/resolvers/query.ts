import { IResolvers } from 'graphql-tools';

import { db } from '../data/data.store';

// Proporcionando las respuestas a las queries
const query: IResolvers = {
  Query: {
    estudiantes(): any {
      return db.estudiantes;
    },
    estudiante(__: void, { id }): any {
      // [0] Permite obtener el primer resultado, o dará error
      const data = db.estudiantes.filter(
        (estudiante) => estudiante.id === id
      )[0];

      if (!data) {
        // Para enviar un error hay que respetar la estructura del objeto
        return {
          id: '-1',
          name: `Estudiante con ID ${id}, no existe`,
          email: '',
          courses: [],
        };
      }

      return data;
    },
  },
};

export default query;
