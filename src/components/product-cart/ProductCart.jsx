import React, { useEffect, useState, useRef } from "react";
import { Formik, Form } from "formik";
import cn from "classnames";
import "./ProductCart.scss";
import close from "../../assets/images/product-cart/close.svg";
import useScrollBlock from "../../hooks/useScrollBlock";
import { useDispatch, useSelector } from "react-redux";
import {
  cartReset,
  decreaseQuantity,
  increaseQuantity,
  postOrderRequest,
  removeFromCart,
  setRequestError,
} from "../../redux/reducers/cartReducer";
import DeliveryForm from "./Delivery/DeliveryForm";
import PaymentForm from "./Payment/PaymentForm";
import Cart from "./Cart/Cart";
import validationSchema from "./FormModel/validationSchema.js";
import initialValues from "./FormModel/initialValues";

const steps = ["Item in cart", "Delivery Info", "Payment"];

const ProductCart = ({ setShow, isShow }) => {
  const dispatch = useDispatch();
  const { order, error, message } = useSelector(({ cart }) => cart);

  const removeOrder = (id) => {
    return dispatch(removeFromCart(id));
  };

  const increaseOrder = (id) => {
    return dispatch(increaseQuantity(id));
  };

  const decreaseOrder = (id) => {
    return dispatch(decreaseQuantity(id));
  };

  function submitForm(values, actions) {
    const products = order?.map((product) => ({
      name: product.name,
      size: product.size,
      color: product.color,
      quantity: product.quantity,
    }));

    values.products = products;
    values.totalPrice = sumPrice.toFixed(2);
    dispatch(postOrderRequest(values));
    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
  }

  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep - 1];
  const isLastStep = activeStep === steps.length - 1;

  const deliveryForm = useRef();
  const [isCash, setCash] = useState(false);

  function renderStepContent(step) {
    switch (step) {
      case 0:
        return (
          <Cart
            productsInCart={order}
            removeOrder={removeOrder}
            increaseOrder={increaseOrder}
            decreaseOrder={decreaseOrder}
          />
        );
      case 1:
        return <DeliveryForm />;
      case 2:
        return <PaymentForm setCash={setCash} />;
      default:
        return;
    }
  }

  const sumPrice = order?.reduce(
    (acc, current) => acc + current.price * current.quantity,
    0
  );

  const [blockScroll, allowScroll] = useScrollBlock();
  useEffect(() => {
    isShow ? blockScroll() : allowScroll();
  });

  useEffect(() => {
    if ((!isShow && message?.message === "success") || (!isShow && error)) {
      dispatch(cartReset());
      setActiveStep(0);
      deliveryForm?.current?.resetForm({});
    }
    !isShow && setActiveStep(0);
    !isShow && deliveryForm?.current?.resetForm({});
  }, [isShow, dispatch, error, message?.message]);

  const setShowHandler = () => {
    setShow(false);
  };

  function handleSubmit(values, actions) {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <>
      <div
        className={
          isShow ? `product-cart-overlay visible` : `product-cart-overlay`
        }
        onClick={setShowHandler}
      ></div>
      <div
        data-test-id="cart"
        className={isShow ? `product-cart cart visible` : `product-cart cart`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="cart__header cart-header">
          <div className="cart-header__title">SHOPPING CART</div>
          <button onClick={setShowHandler} className="cart-header__button">
            <img src={close} alt="" />
          </button>
        </div>
        <div className="cart__body">
          <Formik
            innerRef={deliveryForm}
            initialValues={initialValues}
            validationSchema={currentValidationSchema}
            onSubmit={handleSubmit}
          >
            {message === null && error === null ? (
              <>
                {!!order.length && (
                  <div className="cart__tabs">
                    {steps.map((label, index) => {
                      return (
                        <div
                          className={cn("cart__tab", {
                            active: activeStep === index,
                          })}
                          key={index}
                        >
                          {label}
                        </div>
                      );
                    })}
                  </div>
                )}

                <div className="cart__container">
                  <Form id="deliveryForm" className="orderForm">
                    {renderStepContent(activeStep)}
                  </Form>
                </div>
                {!!order.length && (
                  <div className="cart__total">
                    <span>Total:</span>
                    <span>${sumPrice.toFixed(2)}</span>
                  </div>
                )}

                <div className="cart__buttons">
                  {order.length === 0 ? (
                    <button
                      type="button"
                      onClick={() => {
                        setShowHandler();
                        dispatch(cartReset());
                      }}
                    >
                      BACK TO SHOPPING
                    </button>
                  ) : activeStep === 0 ? (
                    <button
                      type="button"
                      form="deliveryForm"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveStep(activeStep + 1);
                      }}
                    >
                      FURTHER
                    </button>
                  ) : (
                    <button
                      form="deliveryForm"
                      onClick={() => {
                        !deliveryForm.current.isValid &&
                          deliveryForm.current.setFieldValue("terms", false);
                      }}
                      disabled={deliveryForm.isSubmitting}
                      type="submit"
                    >
                      {isLastStep
                        ? isCash
                          ? "Ready"
                          : "Check Out"
                        : "FURTHER"}
                    </button>
                  )}

                  {activeStep !== 0 && (
                    <button type="button" onClick={handleBack}>
                      VIEW CART
                    </button>
                  )}
                </div>
              </>
            ) : message?.message === "success" && error === null ? (
              <>
                <div className="cart__container">
                  <div className="cart__message">Thank you for your order</div>
                  <div style={{ textAlign: "center", marginTop: "24px" }}>
                    Information about your order will appear in your e-mail
                  </div>
                  <div style={{ textAlign: "center", marginTop: "24px" }}>
                    Our manager will call you back
                  </div>
                </div>
                <div className="cart__buttons">
                  <button
                    type="button"
                    onClick={() => {
                      setShowHandler();
                      dispatch(cartReset());
                    }}
                  >
                    BACK TO SHOPPING
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="cart__container">
                  <div className="cart__message">
                    Sorry, your payment has not been processed.
                  </div>
                  <div style={{ marginTop: "24px", textAlign: "center" }}>
                    {error?.response?.data?.message}
                  </div>
                </div>
                <div className="cart__buttons">
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(setRequestError(null));
                      setActiveStep(2);
                    }}
                  >
                    BACK TO PAYMENT
                  </button>
                  <button
                    onClick={() => {
                      dispatch(setRequestError(null));
                      setActiveStep(0);
                      deliveryForm?.current?.resetForm({});
                    }}
                  >
                    VIEW CART
                  </button>
                </div>
              </>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ProductCart;
