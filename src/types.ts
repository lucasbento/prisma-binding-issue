export default `
type User {
  id: ID!
  email: String!
  name: String!
}

type Chat {
  id: ID! @unique
  users: [User!]!
  messages: [ChatMessage]
}

type ChatMessage {
  id: ID!
  text: String!
  user: User!
  chat: Chat!
}

type ChatMessagePreviousValues {
  id: ID!
  text: String!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

type ChatMessageSubscriptionPayload {
  mutation: MutationType!
  node: ChatMessage
  updatedFields: [String!]
  previousValues: ChatMessagePreviousValues
}

type Query {
  dummy: String
}

type Subscription {
  messages: ChatMessageSubscriptionPayload
}

type Mutation {
  startChat(users: [ID!]!): Chat!
  sendMessage(
    text: String!
    user: ID!
    chat: ID!
  ): ChatMessage!
}
`;