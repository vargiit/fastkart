import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import {
  FaSearch,
  FaPhoneAlt,
  FaRegHeart,
  FaShoppingCart,
  FaUserAlt,
} from "react-icons/fa";
import { ProductState } from "../Context/Context";

const Header = () => {
  const {
    state: { cart },
  } = ProductState();

  return (
    <header>
      <div className="container-fluid-lg">
        <div className="navbar-top">
          <Link to="/">
            <img src="../assets/2.png" alt="logo" className="logo" />
          </Link>
          <div className="middle-box">
            <input
              className="middle-box-search"
              type="search"
              placeholder="Im searching for..."
            />
            <button>
              <FaSearch />
            </button>
          </div>
          <div>
            <ul className="right-box">
              <li className="right-box-li">
                <Link to="#">
                  <FaPhoneAlt />
                </Link>
              </li>
              <li className="right-box-li">
                <Link to="wishlist">
                  <FaRegHeart />
                </Link>
              </li>

              <li className="right-box-li ">
                <Link to="/cart">
                  <div class="dropdown">
                    <FaShoppingCart className="shopping-cart-icon" />
                    <span className="cart-count">{cart.length}</span>
                    <div class="dropdown-content">
                      {cart.length > 0 ? (
                        <>
                          {cart.map((data) => (
                            <>
                              <img
                                src={data.image}
                                alt={data.name}
                                width="50"
                              />
                              <p>{data.name}</p>
                              <p>{data.price}</p>
                            </>
                          ))}
                        </>
                      ) : (
                        <span>"Cart is empty"</span>
                      )}
                    </div>
                  </div>
                </Link>
              </li>

              <li className="right-box-li">
                <Link to="#">
                  <FaUserAlt />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
