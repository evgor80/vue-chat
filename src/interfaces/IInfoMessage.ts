export interface IInfoMessage {
  _id: string
  user: string
  type: 'join' | 'leave'
}
