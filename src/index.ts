import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from '../generated/prisma';
import resolvers from './resolvers';
import typeDefs from './types';
import config from './config';

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: params => ({
    ...params,
    db: new Prisma({
      endpoint: config.PRISMA_ENDPOINT, // the endpoint of the Prisma API (value set in `.env`)
      debug: true, // log all GraphQL queries & mutations sent to the Prisma API
      // secret: config.PRISMA_SECRET, // only needed if specified in `database/prisma.yml` (value set in `.env`)
    }),
  }),
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
