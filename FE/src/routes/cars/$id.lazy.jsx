import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { getDetailCar } from "../../service/car/car.service.index";
import { Button, Col, Row } from "react-bootstrap";
import "../../styles/list-car.css";
import { getDetailType } from "../../service/types-service";

export const Route = createLazyFileRoute("/cars/$id")({
  component: CarDetail,
});

function CarDetail() {
  const { id } = Route.useParams();

  const navigate = useNavigate();

  // const { user, token } = useSelector((state) => state.auth);
  const [car, setCar] = useState("");
  const [isNotFound, setIsNotFound] = useState(false);
  const [type, setType] = useState([]);
  const [manufacture, setManufacture] = useState([]);

  const getDetailManufacture = async (id) => {
    const token = localStorage.getItem("token");

    let url = `${import.meta.env.VITE_API_URL}/manufactures/${id}`;

    const response = await fetch(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      method: "GET",
    });

    // get data
    const result = await response.json();
    return result;
  };

  useEffect(() => {
    const getDetaiCarData = async (id) => {
      const result = await getDetailCar(id);
      console.log(result);
      if (result?.success) {
        setCar(result.data);
        setIsNotFound(false);
      } else {
        setIsNotFound(true);
      }
    };

    if (id) {
      getDetaiCarData(id);
    }
  }, [id]);

  useEffect(() => {
    const getManufacturesData = async (id) => {
      const result = await getDetailManufacture(id);
      if (result?.success) {
        setManufacture(result?.data);
      }
    };

    // ambil data types
    const getTypesData = async (id) => {
      const result = await getDetailType(id);
      if (result?.success) {
        setType(result?.data);
      }
    };

    getManufacturesData(car?.manufacture_id);
    getTypesData(car?.type_id);
  }, [car.manufacture_id, car.type_id]);

  if (isNotFound) {
    return (
      <Row className="mt-5">
        <Col>
          <h1 className="text-center">Car is not found!</h1>
        </Col>
      </Row>
    );
  }

  return (
    <div className="container-fluid content-container p-3">
      <div className="row">
        <div className="col-3">
        <h3>Detail Car</h3>
        <Button
          variant="secondary"
          className="mb-3"
          onClick={() => navigate({to: "/"})}
        >
          Back
        </Button>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-8 m-auto mb-2 p-0">
          <div className="card shadow-sm">
            <img
              src={car?.image}
              className="card-img-top card-img img-fluid"
              alt="Car Image"
            />
            <div className="card-body">
              <h5 className="card-title text-center mb-3">{type?.type}</h5>
              <table className="table table-striped table-bordered">
                <tbody>
                  <tr>
                    <td className="font-weight-bold">Plate</td>
                    <td>{car?.plate}</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">Manufacture</td>
                    <td>{manufacture?.name}</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">Model</td>
                    <td>{car?.model}</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">Rent Per Day</td>
                    <td>{car?.rentPerDay}</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">Capacity</td>
                    <td>{car?.capacity}</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">Description</td>
                    <td>{car?.description}</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">Available At</td>
                    <td>{car?.availableAt}</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">Transmission</td>
                    <td>{car?.transmission}</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">Available</td>
                    <td>{car?.available ? "Available" : "Not Available"}</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">Type</td>
                    <td>{type.type}</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">Year</td>
                    <td>{car?.year}</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">Options</td>
                    <td>{car?.options}</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">Specs</td>
                    <td>{car?.specs}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
