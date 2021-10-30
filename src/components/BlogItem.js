import React from "react";
import { Col, Image } from "react-bootstrap";

export default function BlogItem({ colPerRow = 4 }) {
  const getColPerRow = 12 / colPerRow;
  return (
    <>
      <Col md={getColPerRow}>
        <div className="shadow p-4 rounded bg-white  s-translate-hover">
          <div className="d-flex align-items-center">
            <Image
              style={{ width: "70px", height: "70px" }}
              className="img-thumbnail rounded-circle s-mr-2"
              src="https://randomuser.me/api/portraits/men/22.jpg"
            />
            <div>
              <h6 className="m-0">John wahtson</h6>
              <p className="m-0">23 April, 2021</p>
            </div>
          </div>
          <h5 className="my-3 s-text-primary">
            Check at least a doctor in a year for your health
          </h5>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta
            tenetur, rem itaque aliquid minus esse facere dignissimos id
            beatae...
          </p>
          <button className="btn s-btn-bg rounded-pill">Read more</button>
        </div>
      </Col>
      <Col md={getColPerRow}>
        <div className="shadow p-4 rounded bg-white  s-translate-hover">
          <div className="d-flex align-items-center">
            <Image
              style={{ width: "70px", height: "70px" }}
              className="img-thumbnail rounded-circle s-mr-2"
              src="https://randomuser.me/api/portraits/men/22.jpg"
            />
            <div>
              <h6 className="m-0">John wahtson</h6>
              <p className="m-0">23 April, 2021</p>
            </div>
          </div>
          <h5 className="my-3 s-text-primary">
            Check at least a doctor in a year for your health
          </h5>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta
            tenetur, rem itaque aliquid minus esse facere dignissimos id
            beatae...
          </p>
          <button className="btn s-btn-bg rounded-pill">Read more</button>
        </div>
      </Col>
      <Col md={getColPerRow}>
        <div className="shadow p-4 rounded bg-white  s-translate-hover">
          <div className="d-flex align-items-center">
            <Image
              style={{ width: "70px", height: "70px" }}
              className="img-thumbnail rounded-circle s-mr-2"
              src="https://randomuser.me/api/portraits/men/22.jpg"
            />
            <div>
              <h6 className="m-0">John wahtson</h6>
              <p className="m-0">23 April, 2021</p>
            </div>
          </div>
          <h5 className="my-3 s-text-primary">
            Check at least a doctor in a year for your health
          </h5>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta
            tenetur, rem itaque aliquid minus esse facere dignissimos id
            beatae...
          </p>
          <button className="btn s-btn-bg rounded-pill">Read more</button>
        </div>
      </Col>
    </>
  );
}
