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
  let methodsPayments = [
    { name: "paypal", image: paypalImg },
    { name: "visa", image: visaImg },
    { name: "mastercard", image: mastercardImg },
    { name: "cash", image: null },
  ];
  let [showCVV, setShowCVV] = useState(false);

  const formContext = useFormikContext();
  useEffect(() => {
    setCash(formContext.values.paymentMethod === "cash");
  }, [formContext.values.paymentMethod, setCash]);

  return (
    <>
      <div>
        <div className="orderForm__name-section">Method of payments</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            padding: "27px 0 53px",
          }}
        >
          {methodsPayments.map((e, i) => {
            return (
              <div key={i}>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <Field type="radio" name="paymentMethod" value={e.name} />
                  {e.image ? <img src={e.image} alt={e.name} /> : <>{e.name}</>}
                </label>
              </div>
            );
          })}
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
                        onClick={(e) => {
                          e.preventDefault();
                          setShowCVV(!showCVV);
                        }}
                      >
                        {showCVV ? (
                          <img src={show} alt="" />
                        ) : (
                          <img src={hide} alt="" />
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
