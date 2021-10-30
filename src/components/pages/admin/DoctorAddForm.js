import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default function DoctorAddForm(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new doctor
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="doctoName">
            <Form.Label>Doctor Name</Form.Label>
            <Form.Control type="email" placeholder="Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="doctorEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="doctorPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="email" placeholder="Phone" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="doctorPhone">
            <Form.Label>Expert In</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select One</option>
              <option value="Neurologists">Neurologists</option>
              <option value="Dentist">Dentist</option>
              <option value="Gynecologists">Gynecologists</option>
              <option value="Medicine">Medicine</option>
              <option value="Psychiatrists">Psychiatrists</option>
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="doctorPhoto" className="mb-3">
            <Form.Label>Doctor Photo</Form.Label>
            <Form.Control type="file" />
          </Form.Group>

          <Button className="s-btn-bg border-0" type="submit">
            Add
          </Button>
        </Form>
      </Modal.Body>
      <hr />
    </Modal>
  );
}
