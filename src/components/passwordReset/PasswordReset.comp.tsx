import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FormControlElement,
  FormEventHandler,
} from "../../pages/entry/Entry.page";

export const ResetPassword = (props: {
  handleOnChange: (event: React.ChangeEvent<FormControlElement>) => void;
  email: string;
  formSwitcher: (form: string) => void;
  onHandleReset: FormEventHandler;
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Reset Password</h1>
          <hr />
          <Form onSubmit={props.onHandleReset}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="email"
                // required
                value={props.email}
                onChange={props.handleOnChange}
              />
            </Form.Group>

            <Button style={{ marginTop: 25 }} type="submit">
              Reset Password
            </Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a
            className="text-info"
            onClick={(_) => props.formSwitcher("login")}
            style={{ textDecoration: "none" }}
            href="#!"
          >
            Login Now ?
          </a>
        </Col>
      </Row>
    </Container>
  );
};
