import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import "./ManageAllBooking.css";

const ManageAllBooking = () => {
  const { user } = useAuth();
  const [allBookings, setAllbooking] = useState([]);
  const [bookingUpdate, setBookingUpdate] = useState([]);
  const [uptadeModal, setUptadeModal] = useState(false);

  const closeUpdateModal = () => setUptadeModal(false);
  const showUpdateModal = () => setUptadeModal(true);
  const handleUpate = (data) => {
    setBookingUpdate(data);

    showUpdateModal();
  };
  const { register, handleSubmit } = useForm();
  const handleStatusUpdate = (data) => {
    const id = bookingUpdate._id;

    axios
      .put(`https://www.api.kamrul.pro/bookingStatusUpdate/${id}`, data)
      // axios.put(`http://localhost:5000/bookingStatusUpdate/${id}`, data)
      .then((res) => {
        if (res.data.modifiedCount) {
          closeUpdateModal();
          axios.get("https://www.api.kamrul.pro/allBooking").then((res) => {
            setAllbooking(res.data);
            alert("Status  updated successful");
          });
        }
      });
  };

  const deleteBooking = () => {
    const id = bookingUpdate._id;

    closeUpdateModal();
    const sure = window.confirm("are you sure to delete this ?");

    if (sure) {
      axios
        .delete(`https://www.api.kamrul.pro/bookingDelete/${id}`)
        .then((res) => {
          if (res.data.deletedCount) {
            alert("deleted successful");
            const updateBooking = allBookings.filter(
              (booking) => booking._id !== id
            );
            setAllbooking(updateBooking);
          }
        });
    }
  };
  useEffect(() => {
    axios.get("https://www.api.kamrul.pro/allBooking").then((res) => {
      setAllbooking(res.data);
    });
  }, []);
  return (
    <div>
      <Container className="py-5">
        <h1 className="text-center py-2"> All booking list</h1>{" "}
        <Row className="heading">
          <Col md={3} xs={4}>
            <h3 className="mb-0">Name</h3>
          </Col>
          <Col md={3} xs={4}>
            <h3 className="mb-0">Email</h3>
          </Col>
          <Col md={2} xs={4}>
            <h3 className="mb-0">Location</h3>
          </Col>
          <Col md={2} xs={8}>
            <h3 className="mb-0">Status</h3>
          </Col>
          <Col md={2} xs={4}>
            <h3 className="mb-0 text-center">Action</h3>
          </Col>
        </Row>
        {allBookings?.map((booking) => (
          <Row key={booking._id} className="user-booking-detail ">
            <Col md={3}>
              <h5 className="mb-0 mt-2">{booking.name}</h5>
            </Col>
            <Col md={3}>
              <h5 className="mb-0 mt-2">{booking.email}</h5>
            </Col>
            <Col md={2}>
              <h5 className="mb-0 mt-2">{booking.event}</h5>
            </Col>
            <Col md={2}>
              <h5 className="mb-0 mt-2">{booking.status} </h5>
            </Col>
            <Col md={2}>
              <h5 className="mb-0 text-center">
                <Button
                  variant="outline-dark"
                  className=" ms-3"
                  onClick={() => handleUpate(booking)}
                >
                  Action
                </Button>
              </h5>
            </Col>
          </Row>
        ))}
        <Row xs={1} md={3} className="g-4">
          <Modal show={uptadeModal} onHide={closeUpdateModal}>
            <Modal.Header closeButton>
              <Modal.Title>Hello {user.displayName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={handleSubmit(handleStatusUpdate)}>
                <h2 className="fs-3 pb-3">Event : {bookingUpdate.event}</h2>
                <label className="me-3 fs-5 pb-3">Status : </label>

                <select {...register("Status")} className="p-1 fs-5">
                  <option value="pending">Pending</option>
                  <option value="processing">processing</option>
                  <option value="approve">Approve</option>
                </select>

                <Button
                  variant="primary"
                  type="submit"
                  style={{ padding: "5px", marginLeft: "20px" }}
                >
                  Save Changes
                </Button>
              </form>
              <h4 className="mb-0 mt-2 text-center ">
                {" "}
                <span className="delete-text-customize" onClick={deleteBooking}>
                  Delete this booking{" "}
                  <i className="fas fa-trash text-danger "></i>
                </span>
              </h4>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={closeUpdateModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Row>
      </Container>
    </div>
  );
};

export default ManageAllBooking;
