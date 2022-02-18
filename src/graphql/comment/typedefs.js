import { gql } from "apollo-server"

export const commentTypeDefs = gql`
  type Query {
    comments: [Comment]
  }

  type Comment {
    id: ID!
    comment: String!
    # user: User!
    # post: Post!
    indexRef: Int!
    createdAt: String!
  }
`