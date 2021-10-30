import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory } from "react-router";
import { useAuth } from "../contexts/AuthContext.js";
import styles from "./FrontendStyles/NavMenu.module.css";
import NavMenu from "./NavMenu.js";

export default function Header() {
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  return (
    <header
      className={
        "d-flex justify-content-between align-items-center py-4 px-5 bg-light " +
        styles.NavMenu
      }
    >
      <h4>
        Dakter <span className="s-text-primary">Portal</span>
      </h4>
      <NavMenu />
      <div>
        {currentUser?.email ? (
          <div>
            <p className="m-0">
              Hello <strong>{currentUser.displayName}</strong>{" "}
              <button
                title="Logout"
                onClick={logout}
                className="btn btn-sm rounded-circle s-btn-bg ml-2"
              >
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
              </button>
            </p>
          </div>
        ) : (
          <button
            className="btn s-btn-bg"
            onClick={() => history.push("/login")}
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
}
