export default interface IRoom {
  id: string;
  name: string;
  slug: string;
  members: number;
  messages: number;
  private: boolean;
  createdAt: string;
}
