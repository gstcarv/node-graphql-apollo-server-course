import axios from "axios";

export const postResolvers = {
  Query: {
    post: async (_, { id }) => (await axios.get("http://localhost:5000/posts/" + id)).data,
    posts: async () => (await axios.get("http://localhost:5000/posts")).data
  }
}
