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
};

export default type;
