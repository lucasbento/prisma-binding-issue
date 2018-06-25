import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    chats: <T = Chat[]>(args: { where?: ChatWhereInput, orderBy?: ChatOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    chatMessages: <T = ChatMessage[]>(args: { where?: ChatMessageWhereInput, orderBy?: ChatMessageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    chat: <T = Chat | null>(args: { where: ChatWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    chatMessage: <T = ChatMessage | null>(args: { where: ChatMessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    chatsConnection: <T = ChatConnection>(args: { where?: ChatWhereInput, orderBy?: ChatOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    chatMessagesConnection: <T = ChatMessageConnection>(args: { where?: ChatMessageWhereInput, orderBy?: ChatMessageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createChat: <T = Chat>(args: { data: ChatCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createChatMessage: <T = ChatMessage>(args: { data: ChatMessageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateChat: <T = Chat | null>(args: { data: ChatUpdateInput, where: ChatWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateChatMessage: <T = ChatMessage | null>(args: { data: ChatMessageUpdateInput, where: ChatMessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteChat: <T = Chat | null>(args: { where: ChatWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteChatMessage: <T = ChatMessage | null>(args: { where: ChatMessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertChat: <T = Chat>(args: { where: ChatWhereUniqueInput, create: ChatCreateInput, update: ChatUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertChatMessage: <T = ChatMessage>(args: { where: ChatMessageWhereUniqueInput, create: ChatMessageCreateInput, update: ChatMessageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyChats: <T = BatchPayload>(args: { data: ChatUpdateInput, where?: ChatWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyChatMessages: <T = BatchPayload>(args: { data: ChatMessageUpdateInput, where?: ChatMessageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyChats: <T = BatchPayload>(args: { where?: ChatWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyChatMessages: <T = BatchPayload>(args: { where?: ChatMessageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    chat: <T = ChatSubscriptionPayload | null>(args: { where?: ChatSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    chatMessage: <T = ChatMessageSubscriptionPayload | null>(args: { where?: ChatMessageSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Chat: (where?: ChatWhereInput) => Promise<boolean>
  ChatMessage: (where?: ChatMessageWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateChat {
  count: Int!
}

type AggregateChatMessage {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Chat implements Node {
  id: ID!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  messages(where: ChatMessageWhereInput, orderBy: ChatMessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ChatMessage!]
  createdAt: DateTime!
}

"""A connection to a list of items."""
type ChatConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ChatEdge]!
  aggregate: AggregateChat!
}

input ChatCreateInput {
  users: UserCreateManyInput
  messages: ChatMessageCreateManyWithoutChatInput
}

input ChatCreateOneWithoutMessagesInput {
  create: ChatCreateWithoutMessagesInput
  connect: ChatWhereUniqueInput
}

input ChatCreateWithoutMessagesInput {
  users: UserCreateManyInput
}

"""An edge in a connection."""
type ChatEdge {
  """The item at the end of the edge."""
  node: Chat!

  """A cursor for use in pagination."""
  cursor: String!
}

type ChatMessage implements Node {
  id: ID!
  text: String!
  user(where: UserWhereInput): User!
  chat(where: ChatWhereInput): Chat!
  createdAt: DateTime!
}

"""A connection to a list of items."""
type ChatMessageConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ChatMessageEdge]!
  aggregate: AggregateChatMessage!
}

input ChatMessageCreateInput {
  text: String!
  user: UserCreateOneInput!
  chat: ChatCreateOneWithoutMessagesInput!
}

input ChatMessageCreateManyWithoutChatInput {
  create: [ChatMessageCreateWithoutChatInput!]
  connect: [ChatMessageWhereUniqueInput!]
}

input ChatMessageCreateWithoutChatInput {
  text: String!
  user: UserCreateOneInput!
}

"""An edge in a connection."""
type ChatMessageEdge {
  """The item at the end of the edge."""
  node: ChatMessage!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ChatMessageOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ChatMessagePreviousValues {
  id: ID!
  text: String!
  createdAt: DateTime!
}

type ChatMessageSubscriptionPayload {
  mutation: MutationType!
  node: ChatMessage
  updatedFields: [String!]
  previousValues: ChatMessagePreviousValues
}

input ChatMessageSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ChatMessageSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ChatMessageSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ChatMessageSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ChatMessageWhereInput
}

input ChatMessageUpdateInput {
  text: String
  user: UserUpdateOneInput
  chat: ChatUpdateOneWithoutMessagesInput
}

input ChatMessageUpdateManyWithoutChatInput {
  create: [ChatMessageCreateWithoutChatInput!]
  connect: [ChatMessageWhereUniqueInput!]
  disconnect: [ChatMessageWhereUniqueInput!]
  delete: [ChatMessageWhereUniqueInput!]
  update: [ChatMessageUpdateWithWhereUniqueWithoutChatInput!]
  upsert: [ChatMessageUpsertWithWhereUniqueWithoutChatInput!]
}

input ChatMessageUpdateWithoutChatDataInput {
  text: String
  user: UserUpdateOneInput
}

input ChatMessageUpdateWithWhereUniqueWithoutChatInput {
  where: ChatMessageWhereUniqueInput!
  data: ChatMessageUpdateWithoutChatDataInput!
}

input ChatMessageUpsertWithWhereUniqueWithoutChatInput {
  where: ChatMessageWhereUniqueInput!
  update: ChatMessageUpdateWithoutChatDataInput!
  create: ChatMessageCreateWithoutChatInput!
}

input ChatMessageWhereInput {
  """Logical AND on all given filters."""
  AND: [ChatMessageWhereInput!]

  """Logical OR on all given filters."""
  OR: [ChatMessageWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ChatMessageWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  user: UserWhereInput
  chat: ChatWhereInput
}

input ChatMessageWhereUniqueInput {
  id: ID
}

enum ChatOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ChatPreviousValues {
  id: ID!
  createdAt: DateTime!
}

type ChatSubscriptionPayload {
  mutation: MutationType!
  node: Chat
  updatedFields: [String!]
  previousValues: ChatPreviousValues
}

input ChatSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ChatSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ChatSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ChatSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ChatWhereInput
}

input ChatUpdateInput {
  users: UserUpdateManyInput
  messages: ChatMessageUpdateManyWithoutChatInput
}

input ChatUpdateOneWithoutMessagesInput {
  create: ChatCreateWithoutMessagesInput
  connect: ChatWhereUniqueInput
  delete: Boolean
  update: ChatUpdateWithoutMessagesDataInput
  upsert: ChatUpsertWithoutMessagesInput
}

input ChatUpdateWithoutMessagesDataInput {
  users: UserUpdateManyInput
}

input ChatUpsertWithoutMessagesInput {
  update: ChatUpdateWithoutMessagesDataInput!
  create: ChatCreateWithoutMessagesInput!
}

input ChatWhereInput {
  """Logical AND on all given filters."""
  AND: [ChatWhereInput!]

  """Logical OR on all given filters."""
  OR: [ChatWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ChatWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
  messages_every: ChatMessageWhereInput
  messages_some: ChatMessageWhereInput
  messages_none: ChatMessageWhereInput
}

input ChatWhereUniqueInput {
  id: ID
}

scalar DateTime

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createChat(data: ChatCreateInput!): Chat!
  createChatMessage(data: ChatMessageCreateInput!): ChatMessage!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateChat(data: ChatUpdateInput!, where: ChatWhereUniqueInput!): Chat
  updateChatMessage(data: ChatMessageUpdateInput!, where: ChatMessageWhereUniqueInput!): ChatMessage
  deleteUser(where: UserWhereUniqueInput!): User
  deleteChat(where: ChatWhereUniqueInput!): Chat
  deleteChatMessage(where: ChatMessageWhereUniqueInput!): ChatMessage
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertChat(where: ChatWhereUniqueInput!, create: ChatCreateInput!, update: ChatUpdateInput!): Chat!
  upsertChatMessage(where: ChatMessageWhereUniqueInput!, create: ChatMessageCreateInput!, update: ChatMessageUpdateInput!): ChatMessage!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyChats(data: ChatUpdateInput!, where: ChatWhereInput): BatchPayload!
  updateManyChatMessages(data: ChatMessageUpdateInput!, where: ChatMessageWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyChats(where: ChatWhereInput): BatchPayload!
  deleteManyChatMessages(where: ChatMessageWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  chats(where: ChatWhereInput, orderBy: ChatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Chat]!
  chatMessages(where: ChatMessageWhereInput, orderBy: ChatMessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ChatMessage]!
  user(where: UserWhereUniqueInput!): User
  chat(where: ChatWhereUniqueInput!): Chat
  chatMessage(where: ChatMessageWhereUniqueInput!): ChatMessage
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  chatsConnection(where: ChatWhereInput, orderBy: ChatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChatConnection!
  chatMessagesConnection(where: ChatMessageWhereInput, orderBy: ChatMessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChatMessageConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  chat(where: ChatSubscriptionWhereInput): ChatSubscriptionPayload
  chatMessage(where: ChatMessageSubscriptionWhereInput): ChatMessageSubscriptionPayload
}

type User implements Node {
  id: ID!
  name: String!
  email: String!
  password: String!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
}

input UserCreateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  name: String
  email: String
  password: String
}

input UserUpdateInput {
  name: String
  email: String
  password: String
}

input UserUpdateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueNestedInput!]
  upsert: [UserUpsertWithWhereUniqueNestedInput!]
}

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  data: UserUpdateDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type ChatOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type ChatMessageOrderByInput =   'id_ASC' |
  'id_DESC' |
  'text_ASC' |
  'text_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface ChatMessageCreateWithoutChatInput {
  text: String
  user: UserCreateOneInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
}

export interface ChatMessageUpdateWithWhereUniqueWithoutChatInput {
  where: ChatMessageWhereUniqueInput
  data: ChatMessageUpdateWithoutChatDataInput
}

export interface ChatUpdateInput {
  users?: UserUpdateManyInput
  messages?: ChatMessageUpdateManyWithoutChatInput
}

export interface ChatMessageUpdateManyWithoutChatInput {
  create?: ChatMessageCreateWithoutChatInput[] | ChatMessageCreateWithoutChatInput
  connect?: ChatMessageWhereUniqueInput[] | ChatMessageWhereUniqueInput
  disconnect?: ChatMessageWhereUniqueInput[] | ChatMessageWhereUniqueInput
  delete?: ChatMessageWhereUniqueInput[] | ChatMessageWhereUniqueInput
  update?: ChatMessageUpdateWithWhereUniqueWithoutChatInput[] | ChatMessageUpdateWithWhereUniqueWithoutChatInput
  upsert?: ChatMessageUpsertWithWhereUniqueWithoutChatInput[] | ChatMessageUpsertWithWhereUniqueWithoutChatInput
}

export interface ChatCreateOneWithoutMessagesInput {
  create?: ChatCreateWithoutMessagesInput
  connect?: ChatWhereUniqueInput
}

export interface UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface ChatMessageWhereInput {
  AND?: ChatMessageWhereInput[] | ChatMessageWhereInput
  OR?: ChatMessageWhereInput[] | ChatMessageWhereInput
  NOT?: ChatMessageWhereInput[] | ChatMessageWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  user?: UserWhereInput
  chat?: ChatWhereInput
}

export interface UserUpdateDataInput {
  name?: String
  email?: String
  password?: String
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput
  data: UserUpdateDataInput
}

export interface ChatUpdateWithoutMessagesDataInput {
  users?: UserUpdateManyInput
}

export interface UserCreateInput {
  name: String
  email: String
  password: String
}

export interface ChatWhereUniqueInput {
  id?: ID_Input
}

export interface ChatCreateInput {
  users?: UserCreateManyInput
  messages?: ChatMessageCreateManyWithoutChatInput
}

export interface ChatUpdateOneWithoutMessagesInput {
  create?: ChatCreateWithoutMessagesInput
  connect?: ChatWhereUniqueInput
  delete?: Boolean
  update?: ChatUpdateWithoutMessagesDataInput
  upsert?: ChatUpsertWithoutMessagesInput
}

export interface UserCreateManyInput {
  create?: UserCreateInput[] | UserCreateInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface ChatMessageUpsertWithWhereUniqueWithoutChatInput {
  where: ChatMessageWhereUniqueInput
  update: ChatMessageUpdateWithoutChatDataInput
  create: ChatMessageCreateWithoutChatInput
}

export interface ChatMessageCreateManyWithoutChatInput {
  create?: ChatMessageCreateWithoutChatInput[] | ChatMessageCreateWithoutChatInput
  connect?: ChatMessageWhereUniqueInput[] | ChatMessageWhereUniqueInput
}

export interface UserUpdateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface UserUpdateManyInput {
  create?: UserCreateInput[] | UserCreateInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueNestedInput[] | UserUpdateWithWhereUniqueNestedInput
  upsert?: UserUpsertWithWhereUniqueNestedInput[] | UserUpsertWithWhereUniqueNestedInput
}

export interface ChatMessageSubscriptionWhereInput {
  AND?: ChatMessageSubscriptionWhereInput[] | ChatMessageSubscriptionWhereInput
  OR?: ChatMessageSubscriptionWhereInput[] | ChatMessageSubscriptionWhereInput
  NOT?: ChatMessageSubscriptionWhereInput[] | ChatMessageSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ChatMessageWhereInput
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface ChatUpsertWithoutMessagesInput {
  update: ChatUpdateWithoutMessagesDataInput
  create: ChatCreateWithoutMessagesInput
}

export interface ChatMessageWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdateInput {
  name?: String
  email?: String
  password?: String
}

export interface ChatCreateWithoutMessagesInput {
  users?: UserCreateManyInput
}

export interface ChatWhereInput {
  AND?: ChatWhereInput[] | ChatWhereInput
  OR?: ChatWhereInput[] | ChatWhereInput
  NOT?: ChatWhereInput[] | ChatWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  users_every?: UserWhereInput
  users_some?: UserWhereInput
  users_none?: UserWhereInput
  messages_every?: ChatMessageWhereInput
  messages_some?: ChatMessageWhereInput
  messages_none?: ChatMessageWhereInput
}

export interface ChatMessageCreateInput {
  text: String
  user: UserCreateOneInput
  chat: ChatCreateOneWithoutMessagesInput
}

export interface ChatMessageUpdateInput {
  text?: String
  user?: UserUpdateOneInput
  chat?: ChatUpdateOneWithoutMessagesInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface ChatSubscriptionWhereInput {
  AND?: ChatSubscriptionWhereInput[] | ChatSubscriptionWhereInput
  OR?: ChatSubscriptionWhereInput[] | ChatSubscriptionWhereInput
  NOT?: ChatSubscriptionWhereInput[] | ChatSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ChatWhereInput
}

export interface ChatMessageUpdateWithoutChatDataInput {
  text?: String
  user?: UserUpdateOneInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface User extends Node {
  id: ID_Output
  name: String
  email: String
  password: String
}

export interface ChatMessage extends Node {
  id: ID_Output
  text: String
  user: User
  chat: Chat
  createdAt: DateTime
}

export interface ChatMessagePreviousValues {
  id: ID_Output
  text: String
  createdAt: DateTime
}

export interface AggregateChatMessage {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface ChatMessageConnection {
  pageInfo: PageInfo
  edges: ChatMessageEdge[]
  aggregate: AggregateChatMessage
}

export interface BatchPayload {
  count: Long
}

/*
 * An edge in a connection.

 */
export interface ChatEdge {
  node: Chat
  cursor: String
}

export interface ChatPreviousValues {
  id: ID_Output
  createdAt: DateTime
}

export interface AggregateUser {
  count: Int
}

export interface ChatMessageSubscriptionPayload {
  mutation: MutationType
  node?: ChatMessage
  updatedFields?: String[]
  previousValues?: ChatMessagePreviousValues
}

export interface UserPreviousValues {
  id: ID_Output
  name: String
  email: String
  password: String
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface ChatSubscriptionPayload {
  mutation: MutationType
  node?: Chat
  updatedFields?: String[]
  previousValues?: ChatPreviousValues
}

export interface Chat extends Node {
  id: ID_Output
  users?: User[]
  messages?: ChatMessage[]
  createdAt: DateTime
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface ChatConnection {
  pageInfo: PageInfo
  edges: ChatEdge[]
  aggregate: AggregateChat
}

export interface AggregateChat {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface ChatMessageEdge {
  node: ChatMessage
  cursor: String
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string