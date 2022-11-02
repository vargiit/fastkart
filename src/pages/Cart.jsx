import React from "react";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { ProductState } from "../Context/Context";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = ProductState();
  const count = 0;
  return (
    <div className="container-fluid-lg">
      <div className="home">
        <div className="productlist-container">
          {cart &&
            cart.map((data) => (
              <div className="product-box" key={data.id}>
                <div className="product-image">
                  <img src={data.image} alt={data.name} />
                </div>
                <div className="product-detail">
                  <h5>{data.name} </h5>
                  <div className="rating">
                    {[...Array(5)].map(() => (
                      <AiOutlineStar key={Math.random() * 2} />
                    ))}
                  </div>
                  <h6>${data.weight}</h6>
                  <p className="product-price">${data.price}</p>

                  {cart.some((cartItem) => cartItem.id === data.id) ? (
                    <button className="add-button">
                      <span className="span-left">
                        <AiOutlineMinus
                          onClick={() => {
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: data,
                            });
                          }}
                        />
                      </span>
                      {count}
                      <span className="span-right">
                        <AiOutlinePlus
                          onClick={() => {
                            dispatch({ type: "ADD_TO_CART", payload: data });
                          }}
                        />
                      </span>
                    </button>
                  ) : (
                    <button
                      className="add-button"
                      onClick={() => {
                        dispatch({ type: "ADD_TO_CART", payload: data });
                      }}
                    >
                      Add
                      <span className="span-right">
                        <AiOutlinePlus />
                      </span>
                    </button>
                  )}
                </div>
                <div className="product-option">
                  <FaRegHeart />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
