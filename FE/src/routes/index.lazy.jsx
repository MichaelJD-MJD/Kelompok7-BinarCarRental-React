import { createLazyFileRoute, Link } from "@tanstack/react-router";
import plusIc from "../assets/icon/fi_plus.png";
import "../styles/list-car.css";
import { getCars } from "../service/car/car.service.index";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CarItem from "../components/cars_components/CarItem";
import { Col, Row } from "react-bootstrap";
import Protected from "../components/Auth/Protected";

export const Route = createLazyFileRoute("/")({
    component: () => (
        <Protected roles={[1,2]}>
            <Index />
        </Protected>
    ),
});

function Index() {
  const { user, token } = useSelector((state) => state.auth);

  const [cars, setCars] = useState([]);

  useEffect(() => {
    const getCarData = async () => {
      const result = await getCars();
      if (result.success) {
        setCars(result.data);
      }
    };

    if (token) {
      getCarData();
    }
  }, [token]);

  if (!token) {
    return (
      <Row className="mt-4">
        <Col>
          <h1 className="text-center">Please login first to get car data!</h1>
        </Col>
      </Row>
    );
  }

  return (
    <div className="container-fluid content-container p-3">
      <div className="row">
        <div className="col-10">
          <h3>List Car</h3>
        </div>
        <div className="col-2">
          {user && user?.role_id === 1 && (
          <button className="btn add-btn">
            <img src={plusIc} alt="" />
            <span>
              <Link to={"/cars/create"}>Add New Car</Link>
            </span>
          </button>
          )}
        </div>
      </div>
      <div className="row mb-2">
        <div className="col d-flex p-0">
          <button className="btn size-filter ps-3 pe-3 p-2 m-2">All</button>
          <button className="btn size-filter ps-3 pe-3 p-2 m-2">Small</button>
          <button className="btn size-filter ps-3 pe-3 p-2 m-2">Medium</button>
          <button className="btn size-filter ps-3 pe-3 p-2 m-2">Large</button>
        </div>
      </div>
      <div className="row">
        {cars.length === 0 ? (
          <h1>Car data is not found!</h1>
        ) : (
          cars.map((car) => <CarItem car={car} key={car?.id} />)
        )}
      </div>
    </div>
  );
}
