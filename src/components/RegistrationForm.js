import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Alert, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { useAuth } from "../contexts/AuthContext.js";

export default function RegistrationForm() {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: "/" };
  const { signUp } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  async function handleRegistrationForm(data) {
    try {
      setError("");
      setLoading(true);
      await signUp(data.email, data.password, data.name);
      history.replace(from);
    } catch (err) {
      setError("Failed to create an account!");
      setLoading(false);
    }
  }

  return (
    <>
      <Card>
        <Card.Body className="shadow p-md-5">
          <h3 className="mb-3">Create an account!</h3>

          {error && (
            <Alert variant="danger">
              <p className="mb-0">{error}</p>
            </Alert>
          )}
          {loading ? (
            "Loading...."
          ) : (
            <Form onSubmit={handleSubmit(handleRegistrationForm)}>
              <Form.Group className="mb-3" controlId="yourNameReg">
                <Form.Label>Your name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Write your name"
                  {...register("name", {
                    required: "Name field is required",
                  })}
                />
                <p className="text-danger">
                  {errors.name && errors.name.message}
                </p>
              </Form.Group>

              <Form.Group className="mb-3" controlId="emailReg">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  {...register("email", {
                    required: "Email field is required!",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address",
                    },
                  })}
                  type="email"
                  placeholder="Enter email"
                />
                <p className="text-danger">
                  {errors.email && errors.email.message}
                </p>
              </Form.Group>

              <Form.Group className="mb-3" controlId="passwordReg">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  {...register("password", {
                    required: "Password field is required!",
                    validate: (value) => value.length >= 8,
                  })}
                  type="password"
                  placeholder="Password"
                />
                <p className="text-danger">
                  {errors.password && "Password must 8 character"}
                </p>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="formBasicCheckbox"
              ></Form.Group>
              {loading ? (
                <Button disabled className="btn s-btn-bg" type="submit">
                  Submit
                </Button>
              ) : (
                <Button className="btn s-btn-bg" type="submit">
                  Submit
                </Button>
              )}
            </Form>
          )}
        </Card.Body>
      </Card>
    </>
  );
}
