import React from "react";
import { Col, Row } from "react-bootstrap";
import DashboardLayout from "./DashboardLayout.js";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Row>
        <Col md={6} lg={3}>
          <div className="bg-danger p-3 text-white border-6 rounded-1 shadow-sm mb-3">
            <h6>Total Appoinments</h6>
            <span>100</span>
          </div>
        </Col>
        <Col md={6} lg={3}>
          <div className="bg-primary p-3 text-white border-6 rounded-1 shadow-sm mb-3">
            <h6>Total Doctors</h6>
            <span>100</span>
          </div>
        </Col>
        <Col md={6} lg={3}>
          <div className="bg-success p-3 text-white border-6 rounded-1 shadow-sm mb-3">
            <h6>Total Patients</h6>
            <span>100</span>
          </div>
        </Col>
        <Col md={6} lg={3}>
          <div className="bg-warning p-3 text-white border-6 rounded-1 shadow-sm mb-3">
            <h6>Pending Appoinments</h6>
            <span>100</span>
          </div>
        </Col>
      </Row>
    </DashboardLayout>
  );
}
