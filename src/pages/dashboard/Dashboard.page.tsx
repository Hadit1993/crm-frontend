import { Container, Row, Col, Button } from "react-bootstrap";
import TicketTable from "../../components/ticketTable/TicketTable.comp";
import tickets from "../../assets/data/dummy.ticket.json";
import Ticket from "../../models/Ticket";
import BreadCrumbComponent from "../../components/breadcrumb/BreadCrumb.comp";

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumbComponent currentPage="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button
            variant="info"
            style={{ fontSize: "2rem", padding: "10px 30px", color: "white" }}
          >
            Add New Ticket
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center  mb-2">
          <div>Total tickets: 50</div>
          <div>Pending tickets: 5</div>
        </Col>
      </Row>

      <Row>
        <Col className="mt-2">Recently Added tickets</Col>
      </Row>
      <hr />
      <Row>
        <Col className="recent-ticket">
          <TicketTable tickets={tickets as Ticket[]} />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
