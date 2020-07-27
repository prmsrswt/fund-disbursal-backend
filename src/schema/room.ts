import { gql } from 'apollo-server-express';
export default gql`
  extend type Query {
    messages: [Message]
  }

  type Room {
    id: Int
    name: String
    users: [User]
    channel: Channel
    createdAt: String
  }

  type Message {
    id: Int
    body: String
    files: [File]
    isNotification: Boolean
    user: User
    createdAt: String
  }

  type File {
    key: String
    name: String
    message: Message
  }
`;
