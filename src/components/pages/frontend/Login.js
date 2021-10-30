import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import loginBg from "../../../assets/frontend/login-bg.jpg";
import HeaderFooterLayout from "../../HeaderFooterLayout.js";
import LoginForm from "../../LoginForm.js";
import RegistrationForm from "../../RegistrationForm.js";

export default function Login() {
  const [showLoginForm, seShowLoginForm] = useState(false);

  return (
    <HeaderFooterLayout>
      <Container>
        <Row className="d-flex align-items-center">
          <Col className="">
            {!showLoginForm ? <RegistrationForm /> : <LoginForm />}

            <p className="mt-4">
              {!showLoginForm
                ? "Have account already?"
                : "Haven't account yet?"}

              <strong>
                <span
                  className="s-cursor-pointer"
                  onClick={() =>
                    !showLoginForm
                      ? seShowLoginForm(true)
                      : seShowLoginForm(false)
                  }
                >
                  {" "}
                  click here
                </span>
              </strong>
            </p>
          </Col>
          <Col>
            <Image className="img-fluid mt-5" src={loginBg} />
          </Col>
        </Row>
      </Container>
    </HeaderFooterLayout>
  );
}
