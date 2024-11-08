import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
// import { useSelector } from "react-redux";
// import { Row, Col } from "react-bootstrap";
import { createLazyFileRoute } from "@tanstack/react-router";

import plusIc from "../../assets/icon/fi_plus.png";
// import keyIc from "../../assets/icon/fi_key.png";
// import clockIc from "../../assets/icon/fi_clock.png";
// import trashIc from "../../assets/icon/fi_trash-2.png";
// import editIc from "../../assets/icon/fi_edit.png";
// import carImg from "../../assets/car01.min.jpg";
import beepImg from "../../assets/img-BeepBeep.png";
import "../../styles/manufactures/manufacture.css";
import ManufactureItem from "../../components/Manufacture/ManufactureItem";
import { getManufacture } from "../../service/manufacture";

export const Route = createLazyFileRoute("/manufactures/")({
    component: Index,
});

function Index() {
    // const {token} = useSelector((state) => state.auth)
    const [manufacture, setManufacture] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getManufactureData = async () => {
            // setIsLoading(true);
            const result = await getManufacture();
            if (result.success) {
                setManufacture(result.data);
            }
            // setIsLoading(false);
        };

        // if (token) {
            getManufactureData();
        // }
    }, []);

    // if (!token) {
    //     return (
    //         <Row className="mt-4">
    //             <Col>
    //                 <h1 className="text-center">
    //                     Please login first to get cars data!
    //                 </h1>
    //             </Col>
    //         </Row>
    //     );
    // }

    // if (isLoading) {
    //     return (
    //         <Row className="mt-4">
    //             <h1>Loading...</h1>
    //         </Row>
    //     );
    // }

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
                            <Link to={"/addManufacture"}>
                                Add New Manufacture
                            </Link>
                        </span>
                    </button>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col d-flex p-0">
                    <button className="btn size-filter ps-3 pe-3 p-2 m-2">
                        All
                    </button>
                    <button className="btn size-filter ps-3 pe-3 p-2 m-2">
                        Small
                    </button>
                    <button className="btn size-filter ps-3 pe-3 p-2 m-2">
                        Medium
                    </button>
                    <button className="btn size-filter ps-3 pe-3 p-2 m-2">
                        Large
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-3 mb-2 p-0">
                    {/* <div className="">
                        <ManufactureItem />
                    </div> */}
                    {manufacture.length === 0 ? (
                        <h1>Student data is not found!</h1>
                    ) : (
                        manufacture.map((manufacture) => (
                            <ManufactureItem student={manufacture} key={manufacture?.id} />
                        ))
                    )}
                    {/* <div className="card">
                        <img
                            src={carImg}
                            className="card-img-top card-img img-fluid"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">name</h5>
                            <h6>establishment</h6>
                            <p>office - country</p>
                            <p>description</p>
                            <div className="text-center">
                                <a
                                    href="#"
                                    className="btn btn-primary delete-btn px-4 p-2 me-2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#deleteConfirmation"
                                >
                                    <img src={trashIc} alt="" /> Delete
                                </a>
                                <Link
                                    to={"/update-car"}
                                    className="btn btn-primary edit-btn px-4 p-2"
                                >
                                    <img src={editIc} alt="" /> Edit
                                </Link>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            {/* Modal For Delete Confirmation */}
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
                                    Setelah dihapus, data mobil tidak dapat
                                    dikembalikan. Yakin ingin menghapus?
                                </p>
                            </div>
                        </div>
                        <div className="modal-footer d-flex align-items-center justify-content-center">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Tidak
                            </button>
                            <button type="button" className="btn btn-primary">
                                Ya
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
