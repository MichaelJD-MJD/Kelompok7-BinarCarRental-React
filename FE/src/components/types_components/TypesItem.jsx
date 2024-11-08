import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { deleteType, getDetailType } from "../../service/types-service";
import { toast } from "react-toastify";
import Delete from "../../assets/fi_trash-2.png";
import Edit from "../../assets/fi_edit.png";
import DeleteConfirm from "../../assets/img-BeepBeep.png";

const TypeItem = ({ type }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [typeToDelete, setTypeToDelete] = useState(null); // State to hold type data to delete

  const getDetailTypeData = async (id) => {
    setIsLoading(true);
    const result = await getDetailType(id);
    if (result?.success) {
      setIsNotFound(false);
    } else {
      setIsNotFound(true);
    }
    setIsLoading(false);
  };

  const onDelete = async () => {
    if (typeToDelete) {
      const result = await deleteType(typeToDelete.id); // Use the selected type's ID to delete
      if (result?.success) {
        toast.success("Type deleted successfully");
        navigate({ to: "/types" });
      } else {
        toast.error(result?.message || "Failed to delete");
      }
      setShowModal(false); // Hide the modal after action
    }
  };

  return (
    <Col md={3}>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title style={{ fontWeight: 700 }}>{type?.type}</Card.Title>
          <Card.Text>{type?.description}</Card.Text>
          <Button variant="primary" href={`/types-routes/${type?.id}`}>
            Detail Types
          </Button>
          {user && user?.role_id === 1 && (
            <div className="d-flex justify-content-between mt-2">
              <Button
                variant="outline-danger"
                className="d-flex align-items-center"
                style={{ fontWeight: 700, padding: "0.5rem 1.6rem" }}
                onClick={() => {
                  setTypeToDelete(type);
                  setShowModal(true);
                }}
              >
                <img
                  src={Delete}
                  alt="Delete Icon"
                  style={{ width: 20, height: 20, marginRight: 8 }}
                />
                Delete
              </Button>

              <Button
                variant="success"
                className="d-flex align-items-center"
                style={{ fontWeight: 700, padding: "0.5rem 1.6rem" }}
                as={Link}
                to={`/types-routes/edit/${type?.id}`}
              >
                <img
                  src={Edit}
                  alt="Edit Icon"
                  style={{ width: 20, height: 20, marginRight: 8 }}
                />
                Edit
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>

      {showModal && (
        <div
          className="modal fade show"
          id="deleteConfirmation"
          tabIndex="-1"
          aria-labelledby="deleteConfirmationLabel"
          aria-hidden="false"
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="text-center">
                  <img src={DeleteConfirm} alt="" className="w-50" />
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
    </Col>
  );
};

TypeItem.propTypes = {
  type: PropTypes.object.isRequired,
};

export default TypeItem;
