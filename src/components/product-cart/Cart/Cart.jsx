import React from "react";
import trash from "../../../assets/images/product-cart/trash.svg";

const Cart = ({
  productsInCart,
  removeOrder,
  increaseOrder,
  decreaseOrder,
}) => (
  <div className="cart__container">
    {productsInCart?.length > 0 ? (
      productsInCart?.map(
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
                      type="button"
                      data-test-id="minus-product"
                      className="item-quantity__decrease"
                      onClick={() => {
                        decreaseOrder(id);
                      }}
                    >
                      -
                    </button>
                    <div className="item-quantity__count">{quantity}</div>
                    <button
                      type="button"
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
                    type="button"
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
);

export default Cart;
