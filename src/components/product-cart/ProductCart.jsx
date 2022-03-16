import React, { useEffect } from "react";
import "./ProductCart.scss";
import trash from "../../assets/images/product-cart/trash.svg";
import close from "../../assets/images/product-cart/close.svg";
import useScrollBlock from "../../hooks/useScrollBlock";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/reducers/cartReducer";

const ProductCart = ({ setShow, isShow }) => {
  const dispatch = useDispatch();
  const productsInCart = useSelector(({ cart }) => {
    return cart.order;
  });

  const removeOrder = (id) => {
    return dispatch(removeFromCart(id));
  };

  const increaseOrder = (id) => {
    return dispatch(increaseQuantity(id));
  };

  const decreaseOrder = (id) => {
    return dispatch(decreaseQuantity(id));
  };

  const sumPrice = productsInCart.reduce((acc, current) => {
    return acc + current.price * current.quantity;
  }, 0);

  console.log(productsInCart);

  const [blockScroll, allowScroll] = useScrollBlock();
  useEffect(() => {
    isShow ? blockScroll() : allowScroll();
  });

  const setShowHandler = () => {
    setShow(false);
  };

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
          <div className="cart__tabs">
            <div className="cart__tab">Item in cart</div>
            <div className="cart__separator">/</div>
            <div className="cart__tab">Delivery Info</div>
            <div className="cart__separator">/</div>
            <div className="cart__tab">Payment</div>
          </div>
          <div className="cart__container">
            {productsInCart.length > 0 ? (
              productsInCart.map(
                ({ id, name, color, size, image, quantity, price }) => {
                  return (
                    <div
                      data-test-id="cart-card"
                      className="cart__item cart-item"
                      key={id}
                    >
                      <div className="cart-item__image _ibg">
                        <img
                          src={`https://training.cleverland.by/shop${image}`}
                          alt=""
                        />
                      </div>
                      <div className="cart-item__description">
                        <div className="cart-item__title">{name}</div>
                        <div className="cart-item__spec">
                          {color}, {size}
                        </div>
                        <div className="cart-item__actions">
                          <div className="cart-item__quantity item-quantity">
                            <button
                              data-test-id="minus-product"
                              className="item-quantity__decrease"
                              onClick={() => {
                                decreaseOrder(id);
                              }}
                            >
                              -
                            </button>
                            <div className="item-quantity__count">
                              {quantity}
                            </div>
                            <button
                              data-test-id="plus-product"
                              className="item-quantity__increase"
                              onClick={() => {
                                increaseOrder(id);
                              }}
                            >
                              +
                            </button>
                          </div>
                          <div className="cart-item__price">
                            ${(price * quantity).toFixed(2)}
                          </div>
                          <button
                            data-test-id="remove-product"
                            onClick={() => {
                              removeOrder(id);
                            }}
                            className="cart-item__delete"
                          >
                            <img src={trash} alt="trash" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                }
              )
            ) : (
              <div className="cart__message">Sorry, your cart is empty</div>
            )}
          </div>
          {productsInCart.length > 0 ? (
            <>
              <div className="cart__total">
                <span>Total:</span>
                <span>${sumPrice.toFixed(2)}</span>
              </div>
              <div className="cart__buttons">
                <button>FURTHER</button>
                <button onClick={setShowHandler}>VIEW CART</button>
              </div>
            </>
          ) : (
            <div className="cart__buttons">
              <button onClick={setShowHandler}>BACK TO SHOPPING</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCart;
