import { IResolvers } from 'graphql-tools';
import _ from 'lodash';

import { db } from '../data/data.store';

const mutation: IResolvers = {
  Mutation: {
    nuevoCurso(__: void, { curso }): any {
      const itemCurso = {
        id: String(db.cursos.length + 1),
        title: curso.title,
        description: curso.description,
        clases: curso.clases,
        time: curso.time,
        level: curso.level,
        logo: curso.logo,
        path: curso.path,
        teacher: curso.teacher,
        reviews: [],
      };

      if (
        db.cursos.filter((curso) => curso.title === itemCurso.title).length ===
        0
      ) {
        db.cursos.push(itemCurso);
        return itemCurso;
      }

      return {
        id: '-1',
        title: 'Ya existe un curso con ese titulo',
        description: '',
        clases: -1,
        time: 0.0,
        level: 'TODOS',
        logo: '',
        path: '',
        teacher: '',
        reviews: [],
      };
    },
  },
};

export default mutation;
