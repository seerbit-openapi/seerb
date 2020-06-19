import React, { useState } from "react";
import AppWrapper from "./AppWrapper";
import { Accordion, Card } from "react-bootstrap";
import Transfer from "./Transfer";
import BankPayment from "./BankPayment";
import CardPayment from "./CardPayment";
import { data } from "../data";
import { seerBitPay } from "../api";

export default function CheckOut() {
  const [cardValidated, setCardValidated] = useState(false);
  const [bankValidated, setBankValidated] = useState(false);
  const [transferValidated, setTransferValidated] = useState(false);

  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    month: "",
    year: "",
    ccv: ""
  });

  const [bankDetails, setBankDetails] = useState({
    bank: "",
    accountNumber: ""
  });

  const [transferDetails, setTransferDetails] = useState({
    bank: ""
  });

  const handleCardSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setCardValidated(true);
    } else {
      event.preventDefault();
      setCardValidated(false);
      const response = seerBitPay();
      console.log("response", response);
    }
  };

  const handleCardValue = e => {
    setCardDetails({ ...data, [e.target.name]: e.target.value });
  };

  const handleBankSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setBankValidated(true);
    } else {
      setBankValidated(false);
      const response = seerBitPay();
      console.log("response", response);
    }
  };

  const handleBankValue = e => {
    setBankDetails({ ...data, [e.target.name]: e.target.value });
  };

  const handleTransferSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setTransferValidated(true);
    } else {
      setTransferValidated(false);
      const response = seerBitPay();
      console.log("response", response);
    }
  };

  const handleTransferValue = e => {
    setTransferDetails({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <AppWrapper>
      <div className="my-5" style={{ width: "25rem" }}>
        {data.map((value, index) => (
          <div key={index}>
            <Accordion defaultActiveKey="0">
              <Accordion.Collapse eventKey={index}>
                <div>
                  {index === 0 && (
                    <CardPayment
                      handleCardSubmit={handleCardSubmit}
                      handleCardValue={handleCardValue}
                      cardValidated={cardValidated}
                      cardDetails={cardDetails}
                    />
                  )}
                  {index === 1 && (
                    <BankPayment
                      handleBankSubmit={handleBankSubmit}
                      handleBankValue={handleBankValue}
                      bankValidated={bankValidated}
                      bankDetails={bankDetails}
                    />
                  )}
                  {index === 2 && (
                    <Transfer
                      handleTransferSubmit={handleTransferSubmit}
                      handleTransferValue={handleTransferValue}
                      transferValidated={transferValidated}
                      transferDetails={transferDetails}
                    />
                  )}
                </div>
              </Accordion.Collapse>
              <Accordion.Toggle
                as={Card.Header}
                style={{ backgroundColor: "white" }}
                eventKey={index}
              >
                {value.title}
              </Accordion.Toggle>
            </Accordion>
          </div>
        ))}
      </div>
    </AppWrapper>
  );
}
