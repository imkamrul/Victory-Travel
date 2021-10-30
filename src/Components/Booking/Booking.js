import axios from 'axios';
import { Col, Container, Image, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import './Booking.css'
import useAuth from '../../hooks/useAuth';


const Booking = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [selectedPack, setSelectedPack] = useState([]);
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const packageRegister = data => {

        data.status = "pending";
        data.img = selectedPack.img;
        console.log(data)


        axios.post('https://intense-castle-18583.herokuapp.com/packageRegister', data)
            .then(res => {
                if (res.data.insertedId) {
                    history.push("/myBookings");

                }

            })
    }

    useEffect(() => {
        axios.get(`https://intense-castle-18583.herokuapp.com/selectedPack/${id}`)
            .then(res => {

                setSelectedPack(res.data)
            })
    }, [id])

    return (
        <Container className="py-5">
            <Row>
                <Col md={6}>

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
                    {
                        selectedPack.event ? <form onClick={handleSubmit(packageRegister)}>
                            <input defaultValue={user.displayName}{...register("name")} readOnly />
                            <input defaultValue={user.email}{...register("email")} readOnly />
                            <input defaultValue={selectedPack.event}{...register("event")} readOnly />
                            <input defaultValue={selectedPack.price}{...register("price")} readOnly />
                            <input type="number" placeholder="Mobile number"{...register("mobile", { required: true })} />
                            <textarea placeholder="Address"{...register("address", { required: true })} />
                            <input className="submit-btn" type="submit" value="Registration" />
                        </form> : <h1 className="text-center">Your from is loading</h1>
                    }
                </Col>
            </Row>



        </Container>
    );
};

export default Booking;