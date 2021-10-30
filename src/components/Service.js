import React from "react";
import { Col, Image } from "react-bootstrap";
import serviceImageIcon from "../assets/frontend/001-dental.png";

export default function Service() {
  return (
    <>
      <Col md={4}>
        <div className="text-center shadow-sm p-4 rounded s-translate-hover">
          <Image src={serviceImageIcon} style={{ width: "90px" }}></Image>
          <h5 className="my-3">Fluoride Treatment</h5>
          <p>
            Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
            has been the{" "}
          </p>
        </div>
      </Col>
      <Col md={4}>
        <div className="text-center shadow-sm p-4 rounded s-translate-hover">
          <Image src={serviceImageIcon} style={{ width: "90px" }}></Image>
          <h5 className="my-3">Fluoride Treatment</h5>
          <p>
            Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
            has been the{" "}
          </p>
        </div>
      </Col>
      <Col md={4}>
        <div className="text-center shadow-sm p-4 rounded s-translate-hover">
          <Image src={serviceImageIcon} style={{ width: "90px" }}></Image>
          <h5 className="my-3">Fluoride Treatment</h5>
          <p>
            Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
            has been the{" "}
          </p>
        </div>
      </Col>
    </>
  );
}
