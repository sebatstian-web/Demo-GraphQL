import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';

import schema from './schema';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('*', cors());
app.use(compression());
app.use(
  '/apis/gql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () =>
  console.log(`Servidor http://localhost:${PORT}/apis/gql/graphql`)
);
