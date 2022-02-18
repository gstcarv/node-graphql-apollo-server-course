import { gql } from 'apollo-server'
import { postResolvers } from './post/resolvers'
import { postTypeDefs } from './post/typedefs'
import { userResolvers } from './user/resolvers'
import { userTypeDefs } from './user/typedefs'

const rootTypeDefs = gql`
  type Query {
    _root: Boolean
  }
`

export const typeDefs = [rootTypeDefs, userTypeDefs, postTypeDefs]
export const resolvers = [userResolvers, postResolvers]