import TicketHistory from "./History";

export default interface Ticket {
  id: number;
  subject: string;
  status: string;
  addedAt: string;
  history?: TicketHistory[];
}
