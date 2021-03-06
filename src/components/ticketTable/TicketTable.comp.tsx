import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Ticket from "../../models/Ticket";

const TicketTable = (props: { tickets: Ticket[] }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subjects</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
        {props.tickets.length > 0 ? (
          props.tickets.map((ticket) => (
            <tr key={ticket.id.toString()}>
              <td>{ticket.id}</td>

              <td>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`ticket/${ticket.id}`}
                >
                  {ticket.subject}
                </Link>
              </td>

              <td>{ticket.status}</td>
              <td>{ticket.addedAt}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={4} className="text-center">
              No ticket submitted
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default TicketTable;
