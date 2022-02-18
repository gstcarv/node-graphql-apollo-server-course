import axios from "axios";

export const userResolvers = {
  Query: {
    user: async (_, { id }) => (await axios.get("http://localhost:5000/users/" + id)).data,
    users: async () => (await axios.get("http://localhost:5000/users")).data
  }
}