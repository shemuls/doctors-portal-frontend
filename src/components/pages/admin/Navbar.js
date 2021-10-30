import {
  faAngleDoubleRight,
  faBars,
  faCalendarAlt,
  faCog,
  faFileAlt,
  faUserClock,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Link className="text-white mb-3 s-font-500" to="/dashboard">
        <FontAwesomeIcon icon={faBars} /> <span className="p-2">Dashboard</span>
      </Link>

      <Link className="text-white mb-3 s-font-500" to="/dashboard/appoinments">
        <FontAwesomeIcon icon={faCalendarAlt} />{" "}
        <span className="p-2">Appoinments</span>
      </Link>

      <Link className="text-white mb-3 s-font-500" to="/dashboard/doctors">
        <FontAwesomeIcon icon={faUserClock} />{" "}
        <span className="p-2">Doctors</span>
      </Link>

      <Link className="text-white mb-3 s-font-500" to="/dashboard/patients">
        <FontAwesomeIcon icon={faUserCog} />{" "}
        <span className="p-2">Patients</span>
      </Link>

      <Link
        className="text-white mb-3 s-font-500"
        to="/dashboard/prescriptions"
      >
        <FontAwesomeIcon icon={faFileAlt} />
        <span className="p-2">Prescriptions</span>
      </Link>

      <Link className="text-white mb-3 s-font-500" to="/dashboard/setting">
        <FontAwesomeIcon icon={faCog} />
        <span className="p-2">Setting</span>
      </Link>

      <Link className="text-white mb-3 s-font-500" to="/">
        <FontAwesomeIcon icon={faAngleDoubleRight} />
        <span className="p-2">Go to frontend</span>
      </Link>
    </Nav>
  );
}
