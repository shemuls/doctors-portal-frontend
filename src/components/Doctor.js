import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Image } from "react-bootstrap";
import doctrPhoto from "../assets/frontend/doctor-1.png";

export default function Doctor() {
  return (
    <>
      <Col md={4}>
        <div className="bg-white p-4 text-center s-translate-hover rounded shadow-sm">
          <Image className="img-fluid" src={doctrPhoto} />
          <div className="text-center mt-4">
            <h4 className="s-text-secondary">Michel Stark</h4>
            <p className="">Medicine expert</p>
            <div>
              <FontAwesomeIcon
                className="s-mr-2 s-text-primary"
                icon={faMobileAlt}
              />
              <strong>+8801684259496</strong>
            </div>
          </div>
        </div>
      </Col>
      <Col md={4}>
        <div className="bg-white p-4 text-center s-translate-hover rounded shadow-sm">
          <Image className="img-fluid" src={doctrPhoto} />
          <div className="text-center mt-4">
            <h4 className="s-text-secondary">Michel Stark</h4>
            <p className="">Medicine expert</p>
            <div>
              <FontAwesomeIcon
                className="s-mr-2 s-text-primary"
                icon={faMobileAlt}
              />
              <strong>+8801684259496</strong>
            </div>
          </div>
        </div>
      </Col>
      <Col md={4}>
        <div
          className="bg-white p-4 text-center s-translate-hover rounded shadow-sm
            <FontAwesomeIcon icon={faPhoneAlt} />"
        >
          <Image className="img-fluid" src={doctrPhoto} />
          <div className="text-center mt-4">
            <h4 className="s-text-secondary">Michel Stark</h4>
            <p className="">Medicine expert</p>
            <div>
              <FontAwesomeIcon
                className="s-mr-2 s-text-primary"
                icon={faMobileAlt}
              />
              <strong>+8801684259496</strong>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
}
