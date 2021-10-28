import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './EventsAdd.css'

const EventsAdd = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <Container className="py-5">
                <h4 className="text-center">Add A Event</h4>

                <Row className="d-flex justify-content-center">
                    <Col md={5} className="">

                        <Row className="bg-white">
                            <Col className="event-add-from">
                                <form onSubmit={handleSubmit(onSubmit)}>



                                    <input placeholder="Name" {...register("name")} />
                                    <input placeholder="email" {...register("email")} />

                                    <input placeholder="Events Name" {...register("event")} />
                                    <input placeholder="Price" {...register("price")} />
                                    <input placeholder="IMG Url Only" {...register("img")} />





                                    <input className="submit-btn" type="submit" value="Registration" />

                                </form>

                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default EventsAdd;