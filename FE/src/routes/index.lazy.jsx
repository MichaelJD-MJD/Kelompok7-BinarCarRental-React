import { createLazyFileRoute, Link, useNavigate } from "@tanstack/react-router";
import plusIc from "../assets/icon/fi_plus.png";
import keyIc from "../assets/icon/fi_key.png";
import clockIc from "../assets/icon/fi_clock.png";
import trashIc from "../assets/icon/fi_trash-2.png";
import editIc from "../assets/icon/fi_edit.png";
import carImg from "../assets/car01.min.jpg";
import beepImg from "../assets/img-BeepBeep.png";
import "../styles/list-car.css";
import { deleteCar, getCars } from "../service/car/car.service.index";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const [id, setId] = useState("");
  const { token } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const [cars, setCars] = useState([]);
  const [showModal, setShowModal] = useState(false);

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

  const onDelete = async (event) => {
    event.preventDefault();
    console.log(id);
    const result = await deleteCar(id);
    if (result?.success) {
      navigate({ to: "/" });
      setShowModal(false);
      return;
    }
    alert(result?.message);
  };

  return (
    <div className="container-fluid content-container p-3">
      <div className="row">
        <div className="col-10">
          <h3>List Car</h3>
        </div>
        <div className="col-2">
          <button className="btn add-btn">
            <img src={plusIc} alt="" />
            <span>
              <Link to={"/cars/create"}>Add New Car</Link>
            </span>
          </button>
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
          cars.map((car, i) => (
            <div className="col-3 mb-2 p-0" key={i}>
              <div className="card">
                <img
                  src={car.image}
                  className="card-img-top card-img img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <h6 className="card-title">{car.type}</h6>
                  <h5>Rp {car.rentPerDay}/hari</h5>
                  <p className="card-text">
                    <img src={keyIc} alt="" /> Start rent - Finish rent
                  </p>
                  <p>
                    <img src={clockIc} alt="" /> Updated at 27 Oct 2024, 13:00
                  </p>
                  <div className="text-center">
                    <a
                      className="btn btn-primary delete-btn ps-4 pe-4 p-2 me-2"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteConfirmation"
                      onClick={() => {
                        setId(car.id);
                        setShowModal(true);
                      }}
                    >
                      <img src={trashIc} alt="" /> Delete
                    </a>
                    <Link
                      to={`/cars/edit/${car.id}`}
                      className="btn btn-primary edit-btn ps-4 pe-4 p-2"
                    >
                      <img src={editIc} alt="" /> Edit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal for Delete */}
      {showModal && (
        <div
          className="modal fade"
          id="deleteConfirmation"
          tabIndex="-1"
          aria-labelledby="deleteConfirmationLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="text-center">
                  <img src={beepImg} alt="" className="w-50" />
                  <h5>Menghapus Data Mobil</h5>
                  <p>
                    Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin
                    ingin menghapus?
                  </p>
                </div>
              </div>
              <div className="modal-footer d-flex align-items-center justify-content-center">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => setShowModal(false)}
                >
                  Tidak
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onDelete}
                >
                  Ya
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
