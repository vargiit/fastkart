import React from "react";
import { FaEnvelope, FaHome, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container-fluid-lg">
          <div className="service-container">
            <div className="service-box">
              <div className="service-img">
                <img
                  src="https://themes.pixelstrap.com/fastkart/assets/svg/product.svg"
                  alt="product"
                />
              </div>
              <h5>Every Fresh Products</h5>
            </div>
            <div className="service-box">
              <div className="service-img">
                <img
                  src="https://themes.pixelstrap.com/fastkart/assets/svg/delivery.svg"
                  alt="delivery"
                />
              </div>
              <h5>Free Delivery For Order Over $50</h5>
            </div>
            <div className="service-box">
              <div className="service-img">
                <img
                  src="https://themes.pixelstrap.com/fastkart/assets/svg/discount.svg"
                  alt="discount"
                />
              </div>
              <h5>Daily Mega Discounts</h5>
            </div>
            <div className="service-box">
              <div className="service-img">
                <img
                  src="https://themes.pixelstrap.com/fastkart/assets/svg/market.svg"
                  alt="market"
                />
              </div>
              <h5>Best Price On The Market</h5>
            </div>
          </div>

          <div className="main-footer">
            <div className="logo-container">
              <img src="../assets/2.png" alt="logo" className="logo" />

              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form.
              </p>
              <ul className="logo-conent">
                <li>
                  <FaHome />
                  <p>1418 Riverwood Drive, CA 96052, US</p>
                </li>

                <li>
                  <FaEnvelope />
                  <p>support@fastkart.com</p>
                </li>
              </ul>
            </div>
            <div className="col-2">
              <div className="footer-title">
                <h5>Categories</h5>
              </div>
              <div className="footer-content">
                <ul>
                  <li>Vegetables & Fruit</li>
                  <li>Beverages</li>
                  <li>Meats & Seafood</li>
                  <li>Frozen Foods</li>
                  <li>Biscuits & Snacks</li>
                  <li>Grocery & Staples</li>
                </ul>
              </div>
            </div>

            <div className="col-3">
              <div className="footer-title">
                <h5>Useful Links</h5>
              </div>
              <div className="footer-content">
                <ul>
                  <li>Home</li>
                  <li>Shop</li>
                  <li>About us</li>
                  <li>Blog</li>
                  <li>Contact us</li>
                </ul>
              </div>
            </div>
            <div className="col-4">
              <div className="footer-title">
                <h5>Help Center</h5>
              </div>
              <div className="footer-content">
                <ul>
                  <li>Your Order</li>
                  <li>Your Account</li>
                  <li>Track Order</li>
                  <li>Your Wishlist</li>
                  <li>Search</li>
                  <li>FAQ</li>
                </ul>
              </div>
            </div>
            <div className="col-5">
              <div className="footer-title">
                <h5>Contact Us</h5>
              </div>
              <ul className="footer-content-col5">
                <li>
                  <FaPhoneAlt />
                  <div className="contact-number">
                    <p>Hotline 24/7 :</p>
                    <p>+91 888 104 2340</p>
                  </div>
                </li>
                <li>
                  <FaRegEnvelope />
                  <div className="email-address">
                    <p>Email Address :</p>
                    <p>fastkart@hotmail.com</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
