import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FormControlElement,
  FormEventHandler,
} from "../../pages/entry/Entry.page";

export const LoginForm = (props: {
  handleOnChange: (event: React.ChangeEvent<FormControlElement>) => void;
  email: string;
  password: string;
  onHandleSubmit: FormEventHandler;
  formSwitcher: (form: string) => void;
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Client Login</h1>
          <hr />
          <Form onSubmit={props.onHandleSubmit}>
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
            <Form.Group style={{ marginTop: 20 }}>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="password"
                // required
                value={props.password}
                onChange={props.handleOnChange}
              />
            </Form.Group>

            <Button style={{ marginTop: 25 }} type="submit">
              Login
            </Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a
            className="text-info"
            onClick={(_) => {
              props.formSwitcher("reset");
            }}
            style={{ textDecoration: "none" }}
            href="#!"
          >
            Forgot Password ?
          </a>
        </Col>
      </Row>
    </Container>
  );
};
