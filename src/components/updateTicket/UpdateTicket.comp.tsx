import { Button, Form } from "react-bootstrap";
import {
  FormControlElement,
  FormEventHandler,
} from "../../pages/entry/Entry.page";

const UpdateTicket = (props: {
  message: string;
  onMessageChange: (event: React.ChangeEvent<FormControlElement>) => void;
  onSubmit: FormEventHandler;
}) => {
  return (
    <Form onSubmit={props.onSubmit}>
      <Form.Label>Reply</Form.Label>
      <Form.Text style={{ display: "block", marginBottom: 5 }}>
        {" "}
        Please reply your message or update the ticket
      </Form.Text>
      <Form.Control
        as="textarea"
        rows={5}
        name="detail"
        value={props.message}
        onChange={props.onMessageChange}
      />
      <div style={{ textAlign: "right" }}>
        <Button
          style={{ color: "white" }}
          className="mt-3 mb-4"
          variant="info"
          type="submit"
        >
          Reply
        </Button>
      </div>
    </Form>
  );
};

export default UpdateTicket;
