import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BannerBg from "../assets/frontend/doctor-banner-bg.jpg";
import styles from "./FrontendStyles/banner.module.css";

export default function Banner() {
  return (
    <section
      style={{ backgroundImage: `url(${BannerBg})` }}
      className={styles.BannerArea + " d-flex align-items-center"}
    >
      <Container>
        <Row>
          <Col className="s-z-index-1">
            <h2 className="display-4 text-white mb-3">
              Your New Smile
              <br /> Starts Here
            </h2>
            <p className="w-50 text-light mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              enim maxime nesciunt accusamus consequatur veritatis id. Quos
              officia minima iusto. Sint officia cum necessitatibus veritatis,
              explicabo architecto eius esse delectus!
            </p>
            <button className="btn s-btn-bg btn-lg">Get appoinment</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
