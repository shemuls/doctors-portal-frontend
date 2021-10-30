import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavMenu() {
  return (
    <Nav>
      <Nav.Item className="mx-2 ">
        <Link to="/" className="text-dark">
          Home
        </Link>
      </Nav.Item>

      <Nav.Item className="mx-2 ">
        <Link to="/about" className="text-dark">
          About
        </Link>
      </Nav.Item>

      <Nav.Item className="mx-2 ">
        <Link to="/login" className="text-dark">
          Services
        </Link>
      </Nav.Item>

      <Nav.Item className="mx-2 ">
        <Link to="/" className="text-dark">
          Testimonial
        </Link>
      </Nav.Item>

      <Nav.Item className="mx-2 ">
        <Link to="/dashboard" className="text-dark">
          Dashboard
        </Link>
      </Nav.Item>
    </Nav>
  );
}
