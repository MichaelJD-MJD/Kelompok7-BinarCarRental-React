import * as React from "react";
import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { Link } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getDetailManufacture } from "../../service/manufacture";

export const Route = createLazyFileRoute("/manufactures/$id")({
    component: ManufactureDetail,
});

function ManufactureDetail() {
    const { id } = Route.useParams();

    const navigate = useNavigate();

    const [user, token] = useSelector((state) => state.auth);
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
                        style={{ fontWeight: "700", fontSize: "32px" }}
                    >
                        Detail Types
                    </Card.Header>
                    <Card.Body>
                        <Card.Title
                            style={{ fontWeight: "500", fontSize: "22px" }}
                        >
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
