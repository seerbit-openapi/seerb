import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import AppWrapper from "./AppWrapper";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [validated, setValidated] = useState(false);
  const [data, setData] = useState({
    name: "",
    password: "",
    phone: ""
  });

  const history = useHistory();

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      setValidated(false);
      console.log({ ...data });
      history.push("/checkout");
    }
  };

  const handleValue = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <AppWrapper>
      <div
        className="my-5"
        style={{
          width: "25rem",
          borderRadius: 5,
          backgroundColor: "rgba(207, 210, 216, 0.68)"
        }}
      >
        <div className="label p-3">
          <img src="/logo.1ddcf577.png" alt="logo" width="100" />
        </div>
        <div className="header mx-auto text-center p-2">
          Enter Personal Information
        </div>
        <div className="container py-3">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="validationCustom01">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                name="name"
                onChange={e => handleValue(e)}
                type="text"
                className="py-4"
                placeholder="Full Name"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a password.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationCustom02">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                onChange={e => handleValue(e)}
                type="password"
                className="py-4"
                placeholder="Password"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a password.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationCustom03">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                name="phone"
                onChange={e => handleValue(e)}
                type="tel"
                className="py-4"
                placeholder="Phone Number"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a phone number.
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              className="my-2 mt-4 mb-3 py-2 btn-lg btn-block"
              variant="primary"
              type="submit"
            >
              Continue
            </Button>
          </Form>
        </div>
      </div>
    </AppWrapper>
  );
}
