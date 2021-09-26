import { Breadcrumb } from "react-bootstrap";

const BreadCrumbComponent = (props: { currentPage: string }) => {
  return (
    <Breadcrumb style={{ textDecoration: "none" }}>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item style={{ textDecoration: "none" }} href="/">
        {props.currentPage}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrumbComponent;
