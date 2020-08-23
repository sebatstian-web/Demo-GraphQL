import { IResolvers } from 'graphql-tools';
import _ from 'lodash';

import { db } from '../data/data.store';

const type: IResolvers = {
  Estudiante: {
    courses: (parent) => {
      const cursosLista: Array<any> = [];

      parent.courses.map((curso: string) => {
        cursosLista.push(_.filter(db.cursos, ['id', curso])[0]);
      });

      return cursosLista;
    },
  },
  Curso: {
    students: (parent) => {
      const listaEstudiantes: Array<any> = [];

      db.estudiantes.map((estudiante: any) => {
        if (estudiante.courses.filter((id: any) => id === parent.id) > 0) {
          listaEstudiantes.push(estudiante);
        }
      });

      return listaEstudiantes;
    },
    path: (parent) => `https://www.udemy.com${parent.path}`,
  },
};

export default type;
