import axios from 'axios';
import { Col, Container, Image, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import './Booking.css'


const Booking = () => {
    const { id } = useParams();
    const [selectedPack, setSelectedPack] = useState([]);
    const { register, handleSubmit, reset } = useForm();

    const packageRegister = data => {
        data.status = "pending";
        data.img = selectedPack.img;

        console.log(data)
        axios.post('http://localhost:5000/packageRegister', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Registration Success")

                }
                // console.log(res);
            })
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/selectedPack/${id}`)
            .then(res => {
                // console.log(res.data)
                setSelectedPack(res.data)
            })
    }, [id])

    return (
        <Container className="py-5">
            <Row>
                <Col md={6}>
                    {/* <Image src={selectedPack.img} fluid /> */}
                    <div className="location-frame">
                        <Image src={selectedPack.img} style={{ width: "100%", height: "350px" }} rounded />
                        <h1 className="location-img-title">{selectedPack.event}</h1>
                        <p className=" location-details ">
                            <i className="far fa-clock pe-2 text-warning"></i>
                            {selectedPack.duration} days

                        </p>
                    </div>
                </Col>
                <Col md={6} className="package-regi-from">
                    <h4 className="text-center fs-3">Fill up the form for confirm your booking</h4>
                    <form onClick={handleSubmit(packageRegister)}>

                        <input placeholder=" "{...register("name", { required: true })} />
                        <input placeholder=" "{...register("email", { required: true })} />

                        <input placeholder=" "{...register("event", { required: true })} />

                        <input placeholder=" "{...register("price", { required: true })} />







                        <input className="submit-btn" type="submit" value="Registration" />

                    </form>
                </Col>
            </Row>



        </Container>
    );
};

export default Booking;