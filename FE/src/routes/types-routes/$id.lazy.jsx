import { createLazyFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { deleteType, getDetailType } from "../../service/types-service";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";

export const Route = createLazyFileRoute("/types-routes/$id")({
  component: TypeDetail,
});

function TypeDetail() {
  const { id } = Route.useParams();

  const navigate = useNavigate();

  const { user, token } = useSelector((state) => state.auth);
  const [type, setType] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const getDetailTypeData = async (id) => {
      setIsLoading(true);
      const result = await getDetailType(id);
      if (result?.success) {
        setType(result.data);
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

  if (isLoading) {
    return (
      <Row className="mt-5">
        <Col>
          <h1 className="text-center">Loading...</h1>
        </Col>
      </Row>
    );
  }

  if (isNotFound) {
    return (
      <Row className="mt-5">
        <Col>
          <h1 className="text-center">Type is not found!</h1>
        </Col>
      </Row>
    );
  }

  const onDelete = async (event) => {
    event.preventDefault();

    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure to delete this data?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            const result = await deleteType(id);
            if (result?.success) {
              navigate({ to: "/types" });
              return;
            }

            toast.error(result?.message);
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  return (
    <Row className="mt-5">
      <Col className="offset-md-3">
        <Card>
          <Card.Header
            className="text-left"
            style={{ fontWeight: "700", fontSize: "32px" }}
          >
            Detail Types
          </Card.Header>
          <Card.Body>
            <Card.Title style={{ fontWeight: "500", fontSize: "22px" }}>
              Type : {type?.type}
            </Card.Title>
            <Card.Text>Description : {type?.description}</Card.Text>

            <Button
              variant="outline-dark"
              className="d-flex align-items-center"
              style={{ fontWeight: 700, width: "65px" }}
              as={Link}
              to="/types"
            >
              Back
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}></Col>
    </Row>
  );
}
