const { ApolloServer, gql } = require('apollo-server-lambda')
const faunadb = require('faunadb')
const axios = require('axios')
const client = new faunadb.Client({
  secret: process.env.GATSBY_FaunaDB_Secret_Key,
})

const q = faunadb.query

const typeDefs = gql`
  type Query {
    getLolly(lollyid: ID!): Lolly
  }
  type Lolly {
    id: ID!
    sender: String!
    reciever: String!
    message: String!
    lollyTop: String!
    lollyMiddle: String!
    lollyBottom: String!
  }

  type Mutation {
    createLolly(
      sender: String!
      reciever: String!
      message: String!
      lollyTop: String!
      lollyMiddle: String!
      lollyBottom: String!
    ): Lolly
  }
`

const resolvers = {
  Query: {
    getLolly: async (_, { lollyid }) => {
      try {
        const lolly = await client.query(
          q.Get(q.Ref(q.Collection('Lolly'), lollyid))
        )
        // console.log(lolly);

        return {
          id: lolly.ref.id,
          sender: lolly.data.sender,
          reciever: lolly.data.reciever,
          message: lolly.data.message,
          lollyTop: lolly.data.lollyTop,
          lollyMiddle: lolly.data.lollyMiddle,
          lollyBottom: lolly.data.lollyBottom,
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
  Mutation: {
    createLolly: async (
      _,
      { sender, reciever, message, lollyTop, lollyMiddle, lollyBottom }
    ) => {
      try {
        const result = await client.query(
          q.Create(q.Collection('Lolly'), {
            data: {
              sender,
              reciever,
              message,
              lollyTop,
              lollyMiddle,
              lollyBottom,
            },
          })
        )
        const res = await axios.post(
          'https://api.netlify.com/build_hooks/618c22a964096919d2bce7fe'
        )

        console.log(res)
        return {
          id: result.ref.id,
          sender: result.data.sender,
          reciever: result.data.reciever,
          message: result.data.message,
          lollyTop: result.data.lollyTop,
          lollyMiddle: result.data.lollyMiddle,
          lollyBottom: result.data.lollyBottom,
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
})

const handler = server.createHandler()

module.exports = { handler }
