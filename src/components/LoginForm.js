import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Alert, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { useAuth } from "../contexts/AuthContext.js";

export default function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { login } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // handleLoginForm
  async function handleLoginForm(data) {
    try {
      setLoading(true);
      setError(null);
      await login(data.email, data.password);
      history.replace(from);

      setLoading(false);
    } catch (err) {
      setError("Failed to log in");
      setLoading(false);
    }
  }
  return (
    <>
      <Card>
        <Card.Body className="shadow p-md-5">
          <h3 className="mb-3">Login here!</h3>
          {error && (
            <Alert variant="danger">
              <p className="mb-0">{error}</p>
            </Alert>
          )}
          {loading ? (
            "loading..."
          ) : (
            <Form onSubmit={handleSubmit(handleLoginForm)}>
              <Form.Group className="mb-3" controlId="emailLogin">
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
                {errors.email && (
                  <p className="text-danger">{errors.email.message}</p>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="passwordLogin">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  {...register("password", {
                    required: "Password field is requred!",
                  })}
                  type="password"
                  placeholder="Password"
                />

                {errors.password && (
                  <p className="text-danger">{errors.password.message}</p>
                )}
              </Form.Group>

              <Button className="btn s-btn-bg" type="submit">
                Submit
              </Button>
            </Form>
          )}
        </Card.Body>
      </Card>
    </>
  );
}
