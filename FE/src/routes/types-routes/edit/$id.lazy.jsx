import * as React from "react";
import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getDetailType, updateType } from "../../../service/types-service";
import { toast } from "react-toastify";
import Protected from "../../../components/Auth/Protected";

export const Route = createLazyFileRoute("/types-routes/edit/$id")({
  component: () => (
    <Protected roles={[1]}>
      <EditType />
    </Protected>
  ),
});

function EditType() {
  const { id } = Route.useParams();
  const navigate = useNavigate();

  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [isNotFound, setIsNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getDetailTypeData = async (id) => {
      setIsLoading(true);
      const result = await getDetailType(id);
      if (result?.success) {
        setType(result.data?.type);
        setDescription(result.data?.description);
        setIsNotFound(false);
      } else {
        setIsNotFound(true);
      }
      setIsLoading(false);
    };

    if (id) {
      getDetailTypeData(id);
    }
  }, [id]);

  if (isNotFound) {
    navigate({ to: "/types" });
    return;
  }

  const onSubmit = async (event) => {
    event.preventDefault();

    const request = {
      type,
      description,
    };
    const result = await updateType(id, request);
    if (result?.success) {
      navigate({ to: `/types` });
      return;
    }

    toast.error(result?.message);
  };

  return (
    <Row className="mt-5">
      <Col className="offset-md-3">
        <Card>
          <Card.Header className="text-center">Edit Types</Card.Header>
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
              <Form.Group as={Row} className="mb-3" controlId="description">
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
                  Edit Type
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
