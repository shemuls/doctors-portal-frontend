import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function LeftImgRightText({
  imgPosition = "left",
  imgSrc,
  heading,
  text,
  btnText,
  btnLink,
}) {
  return (
    <>
      {imgPosition === "left" ? (
        <Row>
          <Col md={6}>
            <Image
              className="img-fluid rounded-2 shadow s-translate-hover"
              src={imgSrc}
            />
          </Col>
          <Col className="d-flex align-items-center" md={6}>
            <div className="px-md-3">
              <h3>{heading}</h3>
              <p className="my-4">{text}</p>
              <Link className="btn s-btn-bg btn-lg" to={btnLink}>
                {btnText}
              </Link>
            </div>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col
            style={{ paddingRight: "1rem" }}
            className="d-flex align-items-center "
            md={6}
          >
            <div>
              <h3>{heading}</h3>
              <p className="my-4">{text}</p>
              <Link className="btn s-btn-bg btn-lg" to={btnLink}>
                {btnText}
              </Link>
            </div>
          </Col>
          <Col md={6}>
            <Image
              className="img-fluid rounded-2 shadow s-translate-hover"
              src={imgSrc}
            />
          </Col>
        </Row>
      )}
    </>
  );
}
