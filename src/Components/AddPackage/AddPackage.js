import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddPackage.css'

const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        axios.post('https://intense-castle-18583.herokuapp.com/packageADD', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Package added successfully");
                    reset();
                }

            })


    };
    return (
        <div>
            <Container className="py-5">
                <h4 className="text-center">Add A Event</h4>

                <Row className="d-flex justify-content-center">
                    <Col md={5} className="">

                        <Row className="bg-white">
                            <Col className="package-add-from">
                                <form onSubmit={handleSubmit(onSubmit)}>






                                    <input placeholder="Events Name" type="text" {...register("event")} />
                                    <input placeholder="Price" type="number"  {...register("price")} />
                                    <input placeholder="IMG Url Only" type="text" {...register("img")} />
                                    <input placeholder="Duration" type="number" {...register("duration")} />
                                    <textarea placeholder="Description" type="text" {...register("description")} />





                                    <input className="btn btn-primary" type="submit" value="Add Package" />

                                </form>

                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default AddPackage;