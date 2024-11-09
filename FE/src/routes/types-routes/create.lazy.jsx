import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createType } from "../../service/types-service";
import { toast } from "react-toastify";
import Protected from "../../components/Auth/Protected";

export const Route = createLazyFileRoute("/types-routes/create")({
  component: () => (
    <Protected roles={[1]}>
      <CreateType />
    </Protected>
  ),
});

function CreateType() {
  const navigate = useNavigate();

  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const request = {
      type,
      description,
    };
    const result = await createType(request);
    if (result?.success) {
      navigate({ to: "/types" });
      return;
    }

    toast.error(result?.message);
  };

  return (
    <Row className="mt-5">
      <Col className="offset-md-3">
        <Card>
          <Card.Header
            className="text-left"
            style={{ fontWeight: "700", fontSize: "32px" }}
          >
            Add New Type
          </Card.Header>
          <Card.Body>
            <Form onSubmit={onSubmit}>
              <Form.Group as={Row} className="mb-3" controlId="type">
                <Form.Label column sm={3}>
                  Type
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="text"
                    placeholder="Type"
                    required
                    value={type}
                    onChange={(event) => {
                      setType(event.target.value);
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="Description">
                <Form.Label column sm={3}>
                  Description
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="text"
                    placeholder="Description"
                    required
                    value={description}
                    onChange={(event) => {
                      setDescription(event.target.value);
                    }}
                  />
                </Col>
              </Form.Group>
              <div className="d-grid gap-2">
                <Button type="submit" variant="primary">
                  Create Student
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}></Col>
    </Row>
  );
}
