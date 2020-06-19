import React from "react";
import { Form, Button } from "react-bootstrap";
import PaymentWrapper from "./PaymentWrapper";

export default function BankPayment(props) {
  const {
    handleBankSubmit,
    handleBankValue,
    bankValidated,
    bankDetails
  } = props;
  const { bank, accountNumber } = bankDetails;
  return (
    <PaymentWrapper>
      <Form
        noValidate
        className="p-3"
        validated={bankValidated}
        onSubmit={handleBankSubmit}
      >
        <div className="form-group mb-1">
          <select
            name="bank"
            className="form-control"
            style={{ height: 50 }}
            id="validationCustom01"
            value={bank}
            onChange={e => handleBankValue(e)}
          >
            <option value="gtbank">GTBank</option>
            <option value="diamond bank">Diamond Bank</option>
            <option value="union bank">Union Bank</option>
            <option value="acess bank">Access Bank</option>
          </select>
        </div>
        <Form.Group className=" mb-1" controlId="validationCustom02">
          <Form.Control
            name="accountNumber"
            value={accountNumber}
            onChange={e => handleBankValue(e)}
            type="number"
            style={{ height: 50 }}
            placeholder="Account Number"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide your account number.
          </Form.Control.Feedback>
        </Form.Group>
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
