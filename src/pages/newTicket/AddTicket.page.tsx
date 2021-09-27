import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddTicketForm from "../../components/addTicketForm/AddTicketForm.comp";
import BreadCrumbComponent from "../../components/breadcrumb/BreadCrumb.comp";
import { isTextShort } from "../../utils/validation";
import { FormControlElement, FormEventHandler } from "../entry/Entry.page";
import "./addTicket.style.css";

export interface StateData {
  subject: string;
  issueDate?: string;
  detail: string;
}
const AddTicket = () => {
  const [formData, setFormData] = useState<StateData>({
    subject: "",
    detail: "",
  });
  const [formError, setFormError] = useState<StateData>({
    subject: "",
    issueDate: "",
    detail: "",
  });

  const handleOnChange = (event: React.ChangeEvent<FormControlElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onHandleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    const isSubjectValid = isTextShort(formData.subject);

    setFormError({
      ...formError,
      subject: !isSubjectValid ? "subject is not valid" : "",
    });
  };
  useEffect(() => {}, [formData]);

  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumbComponent currentPage="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            onHandleSubmit={onHandleSubmit}
            formData={formData}
            formError={formError}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AddTicket;
