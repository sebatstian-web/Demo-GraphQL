import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';

import schema from './schema';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('*', cors());
app.use(compression());

const server = new ApolloServer({
  schema,
  introspection: true,
});

server.applyMiddleware({ app });

const httpServer = createServer(app);

httpServer.listen(PORT, () =>
  console.log(`Servidor http://localhost:${PORT}/apis/gql/graphql`)
);
