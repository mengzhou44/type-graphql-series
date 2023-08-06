import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import * as Express from "express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./modules/user.resolver";
 
async function main() {
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
    }),
  });

  await apolloServer.start()

  const app = Express();

  apolloServer.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(
      `Server is runnig on  localhost:4000/${apolloServer.graphqlPath}`
    )
  );
}

main();
