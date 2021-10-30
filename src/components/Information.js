import {
  faClock,
  faMapMarked,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col } from "react-bootstrap";

export default function Information() {
  return (
    <>
      <Col md={4}>
        <div className="d-flex align-items-center shadow p-4 rounded-2 s-bg-primary text-white s-translate-hover">
          <div>
            <FontAwesomeIcon className="display-4" icon={faClock} />
          </div>

          <div className="s-ml-3">
            <h5>Opening hours</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, rem.
            </p>
          </div>
        </div>
      </Col>
      <Col md={4}>
        <div className="d-flex align-items-center shadow p-4 rounded-2 s-bg-secondary text-light s-translate-hover">
          <div>
            <FontAwesomeIcon className="display-4" icon={faMapMarked} />
          </div>

          <div className="s-ml-3">
            <h5>Visit our location</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, rem.
            </p>
          </div>
        </div>
      </Col>
      <Col md={4}>
        <div className="d-flex align-items-center shadow p-4 rounded-2 s-bg-primary text-white s-translate-hover">
          <div>
            <FontAwesomeIcon className="display-4" icon={faPhoneAlt} />
          </div>

          <div className="s-ml-3">
            <h5>Contact us now</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, rem.
            </p>
          </div>
        </div>
      </Col>
    </>
  );
}
