import {Link, useNavigate } from "@tanstack/react-router";
import keyIc from "../../assets/icon/fi_key.png";
import clockIc from "../../assets/icon/fi_clock.png";
import trashIc from "../../assets/icon/fi_trash-2.png";
import editIc from "../../assets/icon/fi_edit.png";
import beepImg from "../../assets/img-BeepBeep.png";
import "../../styles/list-car.css";
import { deleteCar } from "../../service/car/car.service.index";
import { useState } from "react";
import { useSelector } from "react-redux";

const CarItem = ({ car }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [carToDelete, setcarToDelete] = useState(null);

  const onDelete = async () => {
    if(carToDelete){
        const result = await deleteCar(carToDelete.id);
        if (result?.success) {
          navigate({ to: "/" });
          window.location.reload();
        } else {
            alert(result?.message);
        }
        setShowModal(false);
    }
  };

  return (
    <div className="col-3 mb-2 p-0">
      <Link
        to={`/cars/${car.id}`}
        className="card"
        style={{ cursor: "pointer", textDecoration: "none", color: "inherit" }}
      >
        <img
          src={car?.image}
          className="card-img-top card-img img-fluid"
          alt="..."
        />
        <div className="card-body">
          <h6 className="card-title">{car?.type}</h6>
          <h5>Rp {car?.rentPerDay}/hari</h5>
          <p className="card-text">
            <img src={keyIc} alt="" /> Start rent - Finish rent
          </p>
          <p>
            <img src={clockIc} alt="" /> Updated at 27 Oct 2024, 13:00
          </p>
          {user && user?.role_id === 1 && (
          <div className="text-center">
            <a
              className="btn btn-primary delete-btn ps-4 pe-4 p-2 me-2"
              data-bs-toggle="modal"
              data-bs-target="#deleteConfirmation"
              onClick={(e) => {
                setcarToDelete(car);
                setShowModal(true);
                e.stopPropagation();
              }}
            >
              <img src={trashIc} alt="" /> Delete
            </a>
            <Link
              to={`/cars/edit/${car.id}`}
              className="btn btn-primary edit-btn ps-4 pe-4 p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={editIc} alt="" /> Edit
            </Link>
          </div>
          )}
        </div>
      </Link>

      {/* Modal for Delete */}
      {showModal && (
        <div
          className="modal fade"
          id="deleteConfirmation"
          tabIndex="-1"
          aria-labelledby="deleteConfirmationLabel"
          aria-hidden="false"
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
};

export default CarItem;
