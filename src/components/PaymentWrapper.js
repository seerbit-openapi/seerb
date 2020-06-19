import React from "react";
import { paymentData } from "../data";

export default function PaymentWrapper(props) {
  return (
    <div
      style={{
        borderRadius: 5,
        backgroundColor: "rgba(207, 210, 216, 0.68)"
      }}
    >
      <div className="d-flex justify-content-between pt-3 px-3">
        <div className="label ">
          <img src="/logo.1ddcf577.png" alt="logo" width="100" />
        </div>
        <div className="d-block text-right payment-data">
          <div className="font-weight-bold">{paymentData.email}</div>
          <div style={{ color: "#3e518d" }}>{paymentData.payment}</div>
          <div className="text-muted">{paymentData.fee}</div>
        </div>
      </div>
      {props.children}
    </div>
  );
}
