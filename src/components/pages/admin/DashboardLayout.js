import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "./Navbar.js";
import styles from "./styles/DashboardLayout.module.css";

export default function DashboardLayout({ children }) {
  return (
    <Container className={"p-0 " + styles.dashboardMainArea} fluid>
      <Row className="h-100">
        <Col className="h-100 s-gradient-bg" md={4} lg={2}>
          <div className={styles.leftSidebar}>
            <Navbar />
            <button className="btn text-white">
              Log Out <FontAwesomeIcon icon={faAngleDoubleRight} />
            </button>
          </div>
        </Col>
        <Col md={8} lg={10}>
          <div className={"s-bg-light " + styles.rightContent}>{children}</div>
        </Col>
      </Row>
    </Container>
  );
}
