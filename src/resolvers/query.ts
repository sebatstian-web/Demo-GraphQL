import { IResolvers } from 'graphql-tools';

// Proporcionando las respuestas a las queries
const query: IResolvers = {
  Query: {
    hola(): string {
      return 'Hola! Mensaje de prueba';
    },
    holaConNombre(__: void, { nombre }): string {
      return `Bienvenido a Graphql! ${nombre}`;
    },
  },
};

export default query;
