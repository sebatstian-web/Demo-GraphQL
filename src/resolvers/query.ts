import { IResolvers } from 'graphql-tools';

import { db } from '../data/data.store';

// Proporcionando las respuestas a las queries
const query: IResolvers = {
  Query: {
    estudiantes(): any {
      return db.estudiantes;
    },
    estudiante(__: void, { estudainteId }): any {
      // [0] Permite obtener el primer resultado, o dará error
      const dataEstudiante = db.estudiantes.filter(
        (estudiante) => estudiante.id === estudainteId
      )[0];

      if (!dataEstudiante) {
        // Para enviar un error hay que respetar la estructura del objeto
        return {
          id: '-1',
          name: `Estudiante con ID ${estudainteId}, no existe`,
          email: '',
          courses: [],
        };
      }

      return dataEstudiante;
    },
    cursos(): any {
      return db.cursos;
    },
    curso(__: void, { cursoId }): any {
      const dataCurso = db.cursos.filter((curso) => curso.id === cursoId)[0];

      if (!dataCurso) {
        // Para enviar un error hay que respetar la estructura del objeto
        return {
          id: '-1',
          title: `El curso con ID ${cursoId}, no existe`,
          description: '',
          clases: -1,
          time: 0.0,
          logo: '',
          level: 'TODOS',
          path: '',
          teacher: '',
          reviews: [],
        };
      }

      return dataCurso;
    },
  },
};

export default query;
