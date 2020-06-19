import React from "react";
import { Form } from "react-bootstrap";
import PaymentWrapper from "./PaymentWrapper";
import { paymentData } from "../data";

export default function Transfer(props) {
  const {
    handleTransferSubmit,
    handleTransferValue,
    transferValidated,
    transferDetails
  } = props;
  const { bank } = transferDetails;
  return (
    <PaymentWrapper>
      <Form
        noValidate
        className="p-3"
        validated={transferValidated}
        onSubmit={handleTransferSubmit}
      >
        <div className="form-group mb-1">
          <select
            name="bank"
            className="form-control"
            style={{ height: 50 }}
            id="validationCustom01"
            value={bank}
            onChange={handleTransferValue}
          >
            <option value="gtbank">GTBank</option>
            <option value="diamond bank">Diamond Bank</option>
            <option value="union bank">Union Bank</option>
            <option value="acess bank">Access Bank</option>
          </select>
        </div>
        <div className="container">
          <div className="d-flex justify-content-between mx-auto my-3">
            <div className=" text-label text-muted payment-data">
              <div>Amount</div>
              <div>Account Number</div>
              <div>Bank</div>
              <div>Beneficiary Name</div>
            </div>
            <div
              className="d-block text-right payment-data"
              style={{ color: "#3e518d" }}
            >
              <div>{paymentData.payment}</div>
              <div>5050505050555</div>
              <div>Ruby Bank</div>
              <div>Century Gateway</div>
            </div>
          </div>
          <hr />
          <div className="text-center">*73*2*5595959599595#</div>
          <div className="text-center text-danger payment-data">
            Generated account number expires in 48 hour
          </div>
        </div>
      </Form>
    </PaymentWrapper>
  );
}
