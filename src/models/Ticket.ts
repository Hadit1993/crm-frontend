export default interface Ticket {
  id: number;
  subject: string;
  status: string;
  addedAt: string;
  history?: History[];
}
