import { createLazyFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { getDetailManufacture } from "../../service/manufacture";

export const Route = createLazyFileRoute("/manufactures/$id")({
    component: ManufactureDetail,
});

function ManufactureDetail() {
    const { id } = Route.useParams();

    const navigate = useNavigate();

    const [manufacture, setManufacture] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isNotFound, setIsNotFound] = useState(false);

    useEffect(() => {
        const getDetailManufactureData = async (id) => {
            setIsLoading(true);
            const result = await getDetailManufacture(id);
            if (result?.success) {
                setManufacture(result.data);
                setIsNotFound(false);
            } else {
                setIsNotFound(true);
            }
            setIsLoading(false);
        };

        if (id) {
            getDetailManufactureData(id);
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
                    <h1 className="text-center">Not Found</h1>
                </Col>
            </Row>
        );
    }

    return (
        <Row className="mt-5">
            <Col className="offset-md-3">
                <Card>
                    <Card.Header
                        className="text-left"
                        style={{ fontWeight: "700", fontSize: "2rem" }}
                    >
                        Detail Manufacture
                    </Card.Header>
                    <Card.Img
                        variant="top"
                        className="p-5"
                        src={manufacture?.logo}
                    />
                    <Card.Body>
                        <Card.Title
                            style={{ fontWeight: "500", fontSize: "1.8rem" }}
                        >
                            Manufacture : {manufacture?.name}
                        </Card.Title>
                        <Card.Text>
                            Description : {manufacture?.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Text>
                            Establishment : {manufacture?.establishment}
                        </Card.Text>
                        <Card.Text>Country : {manufacture?.country}</Card.Text>
                        <Card.Text>Office : {manufacture?.office}</Card.Text>
                        <Button
                            variant="outline-dark"
                            className="d-flex align-items-center"
                            style={{ fontWeight: 700, width: "4.063rem" }}
                            as={Link}
                            to="/manufactures"
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
