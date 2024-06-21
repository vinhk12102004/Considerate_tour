import React from "react";
import { Container, Row, Col, Form, ListGroup, Alert } from "reactstrap";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "../styles/Tourdetails.css";



const TourDetails = () => {
    const { tourid } = useParams();


    const {
        data: tour,
        loading: loadingTour,
        error: errorTour,
    } = useFetch(`tours/${tourid}`);
    if (loadingTour) {
        return <div>Loading...</div>;
    }

    if (errorTour || !tour) {
        return <div className="error__msg">Error loading tour details. Check your network</div>;
    }
    const { image, tentour, chitiet, ndchitiet, giatour, tendiadiem, gioihannguoi } =
        tour;
    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col lg="8">
                            <div className="tour__content">
                                <img src={image} alt="" />

                                <div className="tour__info">
                                    <h2>{tentour}</h2>

                                    <div className="d-flex align-items-center gap-5">


                                        <span>
                                            <i className="ri-map-pin-user-fill"></i>
                                            {tendiadiem}
                                        </span>
                                    </div>
                                    <div className="tour__extra-details">
                                        <span>
                                            <i className="ri-map-pin-2-line"></i>
                                            {tendiadiem}
                                        </span>
                                        <span>
                                            <i className="ri-money-dollar-circle-line"></i> {giatour}
                                            /Per Person
                                        </span>

                                        <span>
                                            <i className="ri-group-line"></i>
                                            {gioihannguoi} People
                                        </span>
                                    </div>
                                    <p>{chitiet}</p>
                                    <p>{ndchitiet}</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>
        </>


    )




}
export default TourDetails;