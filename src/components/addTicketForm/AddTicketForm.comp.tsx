import { Button, Col, Form, Row, Card } from "react-bootstrap";
import {
  FormControlElement,
  FormEventHandler,
} from "../../pages/entry/Entry.page";
import { StateData } from "../../pages/newTicket/AddTicket.page";
import "./AddTicketForm.style.css";

function AddTicketForm(props: {
  handleOnChange: (event: React.ChangeEvent<FormControlElement>) => void;
  onHandleSubmit: FormEventHandler;
  formData: StateData;
  formError: StateData;
}) {
  return (
    <Card style={{ borderRadius: 5 }} className="mt-3 add-new-ticket bg-light">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />
      <Form onSubmit={props.onHandleSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              name="subject"
              placeholder="subject"
              isInvalid={props.formError.subject.length > 0}
              // required
              value={props.formData.subject}
              onChange={props.handleOnChange}
            />
            <Form.Text className="text-danger">
              {props.formError.subject}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row} style={{ marginTop: 20 }}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              isInvalid={
                props.formError.issueDate !== undefined &&
                props.formError.issueDate.length > 0
              }
              value={props.formData.issueDate}
              onChange={props.handleOnChange}
            />
            <Form.Text className="text-danger">
              {props.formError.issueDate}
            </Form.Text>
          </Col>
        </Form.Group>

        <Form.Group style={{ marginTop: 20 }}>
          <Form.Label>Detail</Form.Label>
          <Form.Control
            style={{ minHeight: 150 }}
            as="textarea"
            name="detail"
            isInvalid={props.formError.detail.length > 0}
            value={props.formData.detail}
            onChange={props.handleOnChange}
          />

          <Form.Text className="text-danger">
            {props.formError.detail}
          </Form.Text>
        </Form.Group>

        <Button
          style={{ marginTop: 25, width: "100%", color: "white" }}
          variant="info"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </Card>
  );
}

export default AddTicketForm;
