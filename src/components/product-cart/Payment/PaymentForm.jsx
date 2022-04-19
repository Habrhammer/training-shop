import React, { useEffect, useState } from "react";
import { Field, useFormikContext } from "formik";
import NumberFormat from "react-number-format";
import "./PaymentForm.scss";
import paypalImg from "../assets/paypal.png";
import visaImg from "../assets/visa.png";
import mastercardImg from "../assets/mastercard.png";
import show from "../assets/show.svg";
import hide from "../assets/hide.svg";

const PaymentForm = ({ setCash }) => {
  const methodsPayments = [
    { name: "paypal", image: paypalImg },
    { name: "visa", image: visaImg },
    { name: "mastercard", image: mastercardImg },
    { name: "cash", image: null },
  ];
  const [showCVV, setShowCVV] = useState(false);

  const formContext = useFormikContext();
  useEffect(() => {
    setCash(formContext.values.paymentMethod === "cash");
  }, [formContext.values.paymentMethod, setCash]);

  return (
    <>
      <div>
        <div className="orderForm__name-section">Method of payments</div>
        <div className="orderForm__items_paymentMethod">
          {methodsPayments.map((element, index) => (
            <div key={index}>
              <label className="orderForm__label_paymentMethod">
                <Field type="radio" name="paymentMethod" value={element.name} />
                {element.image ? (
                  <img src={element.image} alt={element.name} />
                ) : (
                  <span>{element.name}</span>
                )}
              </label>
            </div>
          ))}
        </div>
      </div>

      {formContext.values.paymentMethod !== "paypal" &&
        formContext.values.paymentMethod !== "cash" && (
          <div className="orderForm__section">
            <div className="orderForm__name-section">CARD</div>
            <div className="orderForm__item">
              <Field name="card" type="text">
                {({ field, meta }) => (
                  <>
                    <NumberFormat
                      name="card"
                      format="#### #### #### ####"
                      placeholder="____ ____ ____ ____"
                      mask="_"
                      value={field.value}
                      onValueChange={(val) => {
                        return formContext.setFieldValue(
                          "card",
                          val.floatValue || ""
                        );
                      }}
                      // {...field}
                    />
                    {meta.touched && meta.error && (
                      <div className="orderForm__error">{meta.error}</div>
                    )}
                  </>
                )}
              </Field>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <div className="orderForm__item" style={{ width: "100%" }}>
                <Field name="cardDate" type="text">
                  {({ field, meta }) => (
                    <>
                      <NumberFormat
                        format="##/##"
                        placeholder="MM/YY"
                        {...field}
                        mask={["M", "M", "Y", "Y"]}
                      />
                      {meta.touched && meta.error && (
                        <div className="orderForm__error">{meta.error}</div>
                      )}
                    </>
                  )}
                </Field>
              </div>
              <div
                className="orderForm__item orderForm__item_cvv"
                style={{ width: "100%" }}
              >
                <Field name="cardCVV">
                  {({ field, meta }) => (
                    <>
                      <input
                        type={showCVV ? "text" : "password"}
                        placeholder="CVV"
                        maxLength="4"
                        autoComplete="false"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setShowCVV(!showCVV);
                        }}
                      >
                        {showCVV ? (
                          <img src={show} alt="show" />
                        ) : (
                          <img src={hide} alt="hide" />
                        )}
                      </button>
                      {meta.touched && meta.error && (
                        <div className="orderForm__error">{meta.error}</div>
                      )}
                    </>
                  )}
                </Field>
              </div>
            </div>
          </div>
        )}
      {formContext.values.paymentMethod === "paypal" && (
        <div className="orderForm__section">
          <div className="orderForm__name-section">EMAIL</div>
          <div className="orderForm__item">
            <Field name="cashEmail" type="text">
              {({ field, meta }) => (
                <>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="off"
                    {...field}
                  />
                  {meta.touched && meta.error && (
                    <div className="orderForm__error">{meta.error}</div>
                  )}
                </>
              )}
            </Field>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentForm;
