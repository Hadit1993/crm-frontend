import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import BreadCrumbComponent from "../../components/breadcrumb/BreadCrumb.comp";
import SearchForm from "../../components/searchForm/SearchForm.comp";
import TicketTable from "../../components/ticketTable/TicketTable.comp";
import { FormControlElement } from "../entry/Entry.page";
import tickets from "../../assets/data/dummy.ticket.json";
import Ticket from "../../models/Ticket";

const TicketList = () => {
  const [query, setQuery] = useState("");
  const allTickets = tickets as Ticket[];
  const [searchedTickets, setSearchedTickets] = useState<Ticket[]>(allTickets);

  const handleSearchOnChange = (
    event: React.ChangeEvent<FormControlElement>
  ) => {
    const q = event.target.value;
    setQuery(q);
    setSearchedTickets(
      q.length === 0
        ? allTickets
        : allTickets.filter(
            (val) =>
              val.subject.toLowerCase().includes(q.toLowerCase()) ||
              val.status.toLowerCase().includes(q.toLowerCase())
          )
    );
  };

  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumbComponent currentPage="Ticket List" />
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col>
          <Button style={{ color: "white" }} variant="info">
            Add New Ticket
          </Button>
        </Col>
        <Col style={{ textAlign: "right" }} className="text-right">
          <SearchForm handleOnChange={handleSearchOnChange} query={query} />
        </Col>
      </Row>
      <hr style={{ marginTop: 50 }} />
      <Row>
        <Col>
          <TicketTable tickets={searchedTickets} />
        </Col>
      </Row>
    </Container>
  );
};

export default TicketList;
