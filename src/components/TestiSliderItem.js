import React from "react";
import { Image } from "react-bootstrap";

export default function TestiSliderItem({ testimonials }) {
  return (
    <div className=" s-translate-hover shadow-sm m-2 px-md-5 px-sm-3 py-4 bg-white rounded-3">
      <q>{testimonials.comment}</q>
      <div className="mt-4 d-flex align-items-center">
        <Image
          style={{ width: "70px", height: "70px" }}
          className="img-thumbnail rounded-circle s-mr-2"
          src={testimonials.clientPhoto}
        />
        <h6>{testimonials.clientName}</h6>
      </div>
    </div>
  );
}
