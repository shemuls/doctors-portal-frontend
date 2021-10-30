import React, { useState } from "react";
import { Table } from "react-bootstrap";
import DashboardLayout from "./DashboardLayout.js";
import Doctor from "./Doctor.js";
import DoctorAddForm from "./DoctorAddForm.js";

export default function Doctors() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <DashboardLayout>
      <button onClick={() => setModalShow(true)} className="btn s-btn-bg">
        Add New
      </button>
      <hr />
      <h4>All doctors</h4>
      <DoctorAddForm show={modalShow} onHide={() => setModalShow(false)} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Email</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Expertise</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <Doctor></Doctor>
        </tbody>
      </Table>
    </DashboardLayout>
  );
}
