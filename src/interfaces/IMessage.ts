export interface IMessage {
  _id: string
  author: {
    username: string
  }
  type: 'message'
  text: string
  createdAt: string
}
