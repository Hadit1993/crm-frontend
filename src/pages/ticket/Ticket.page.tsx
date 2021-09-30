import { Button, Col, Container, Row } from "react-bootstrap";
import BreadCrumbComponent from "../../components/breadcrumb/BreadCrumb.comp";
import tickets from "../../assets/data/dummy.ticket.json";
import Ticket from "../../models/Ticket";
import MessageHistory from "../../components/messageHistory/MessageHistory.comp";
import UpdateTicket from "../../components/updateTicket/UpdateTicket.comp";
import { useState } from "react";
import { FormControlElement, FormEventHandler } from "../entry/Entry.page";

const fakeTickets = tickets as Ticket[];

const TicketPage = () => {
  const sampleTicket = fakeTickets[0];
  const [message, setMessage] = useState("");

  const onMessageChange = (event: React.ChangeEvent<FormControlElement>) => {
    setMessage(event.target.value);
  };

  const onSubmit: FormEventHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumbComponent currentPage="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col
          style={{ fontWeight: "bold" }}
          className="text-weight-bold text-secondary"
        >
          <div className="subject">subject: {sampleTicket.subject}</div>
          <div className="date">issue date: {sampleTicket.addedAt}</div>
          <div className="status">status: {sampleTicket.status}</div>
        </Col>
        <Col>
          <Button variant="outline-info">Close Ticket</Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <MessageHistory message={sampleTicket.history || []} />
      </Row>

      <hr />
      <Row className="mt-4">
        <Col>
          <UpdateTicket
            message={message}
            onMessageChange={onMessageChange}
            onSubmit={onSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default TicketPage;
