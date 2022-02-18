import { ApolloServer, gql } from 'apollo-server'
import { resolvers, typeDefs } from './graphql/schema'

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen(3000).then(() => {
  console.log("Server listening 3000")
})