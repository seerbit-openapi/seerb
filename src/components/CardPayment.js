import React from "react";
import { Form, Button } from "react-bootstrap";
import PaymentWrapper from "./PaymentWrapper";

export default function CardPayment(props) {
  const {
    handleCardSubmit,
    handleCardValue,
    cardValidated,
    cardDetails
  } = props;
  const { cardNumber, month, year, ccv } = cardDetails;

  return (
    <PaymentWrapper>
      <Form
        noValidate
        className="p-3"
        validated={cardValidated}
        onSubmit={handleCardSubmit}
      >
        <Form.Group className=" mb-1" controlId="validationCustom01">
          <Form.Control
            name="cardNumber"
            value={cardNumber}
            maxLength="16"
            pattern="^\d{1,16}$"
            onChange={e => handleCardValue(e)}
            type="type"
            className="py-4"
            placeholder="Card Number"
            required
          />
          <Form.Control.Feedback type="invalid">
            Invalid Card Detail
          </Form.Control.Feedback>
        </Form.Group>
        <div className="d-flex d-inline">
          <div style={{ width: 100 }}>
            <Form.Group className=" mb-1 mr-1" controlId="validationCustom02">
              <Form.Control
                name="month"
                value={month}
                onChange={e => handleCardValue(e)}
                type="month"
                className="py-4"
                placeholder="MM"
                required
              />
            </Form.Group>
          </div>
          <div style={{ width: 130 }}>
            <Form.Group className=" mb-1 mr-1" controlId="validationCustom02">
              <Form.Control
                name="year"
                value={year}
                onChange={e => handleCardValue(e)}
                type="number"
                min="20"
                max="99"
                className="py-4"
                placeholder="YY"
                required
              />
            </Form.Group>
          </div>
          <div style={{ width: "100%" }}>
            <Form.Group className=" mb-1" controlId="validationCustom02">
              <Form.Control
                name="ccv"
                value={ccv}
                onChange={e => handleCardValue(e)}
                type="text"
                pattern="^\d{1,3}$"
                maxLength="3"
                className="py-4"
                placeholder="CCV"
                required
              />
            </Form.Group>
          </div>
        </div>
        <Button
          className=" mt-2 py-2 btn-lg btn-block"
          variant="primary"
          type="submit"
        >
          Pay
        </Button>
      </Form>
    </PaymentWrapper>
  );
}
