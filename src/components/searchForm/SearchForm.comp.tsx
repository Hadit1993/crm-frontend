import { Col, Form, Row } from "react-bootstrap";
import { FormControlElement } from "../../pages/entry/Entry.page";

const SearchForm = (props: {
  handleOnChange: (event: React.ChangeEvent<FormControlElement>) => void;
  query: string;
}) => {
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Search:{" "}
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              onChange={props.handleOnChange}
              name="search"
              placeholder="search"
            ></Form.Control>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SearchForm;
