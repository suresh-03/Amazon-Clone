import { useState } from "react";
import "../App.css";
import logo from "../assets/amazon_logo.png";
import india from "../assets/india.jpg";
import cart from "../assets/cart.png";

function NavBar() {
  const [isShown, setIsShown] = useState(false);
  const [isAccShow,setAccShow] = useState(false);

  return (
    <div className="container">
      <div className="nav">
        <div className="logos">
          <img className="logo" src={logo} alt="" />
          <span className="in">.in</span>
        </div>
        <div className="location">
          <span className="material-symbols-outlined location-icon">
            location_on
          </span>
          <div className="select">
            <span className="hello">Hello</span>
            <span className="address">Select your address</span>
          </div>
        </div>
        <div className="search-container">
          <div className="dropdown-container">
            <select name="category" id="my_dropdown" className="my_dropdown">
              <option id="option" value="All">
                All Categories
              </option>
              <option id="option" value="">
                Amazon Devices
              </option>
              <option id="option" value="All">
                Amazon Fashion
              </option>
              <option id="option" value="All">
                Amazon Fresh
              </option>
              <option id="option" value="All">
                Amazon Pharmacy
              </option>
              <option id="option" value="All">
                Appliances
              </option>
              <option id="option" value="All">
                Apps & Games
              </option>
              <option id="option" value="All">
                Audible Audiobooks
              </option>
              <option id="option" value="All">
                Baby
              </option>
              <option id="option" value="All">
                Beauty
              </option>
              <option id="option" value="All">
                Books
              </option>
              <option id="option" value="All">
                Car & Motorbike
              </option>
              <option id="option" value="All">
                Clothing & Accessories
              </option>
              <option id="option" value="All">
                Collectibles
              </option>
              <option id="option" value="All">
                Computers & Accessories
              </option>
              <option id="option" value="All">
                Electronics
              </option>
              <option id="option" value="All">
                Furniture
              </option>
              <option id="option" value="All">
                Garden & Outdoors
              </option>
              <option id="option" value="All">
                Gift Cards
              </option>
              <option id="option" value="All">
                Grocery & Gourmet Foods
              </option>
              <option id="option" value="All">
                Health & Personal Care
              </option>
              <option id="option" value="All">
                Home & Kitchen
              </option>
              <option id="option" value="All">
                Industrial & Scientific
              </option>
              <option id="option" value="All">
                Jewellery
              </option>
              <option id="option" value="All">
                Luggage & Bags
              </option>
              <option id="option" value="All">
                Luxury Beauty
              </option>
              <option id="option" value="All">
                Musical Instruments
              </option>
              <option id="option" value="All">
                Office Products
              </option>
              <option id="option" value="All">
                Pet Supplies
              </option>
              <option id="option" value="All">
                Shoes & Handbags
              </option>
              <option id="option" value="All">
                Software
              </option>
              <option id="option" value="All">
                Sports, Fitness & Outdoors
              </option>
              <option id="option" value="All">
                Subscribe & Save
              </option>
              <option id="option" value="All">
                Tools & Home Improvement
              </option>
              <option id="option" value="All">
                Toys & Games
              </option>
              <option id="option" value="All">
                Under $500
              </option>
              <option id="option" value="All">
                Video Games
              </option>
              <option id="option" value="All">
                Watches
              </option>
            </select>
          </div>

          <input id="search" type="text" placeholder="Search Amazon.in" />
          <div className="search-background">
            <span class="material-symbols-outlined search-icon">search</span>
          </div>
          <div className="for-hover"></div>
        </div>
        <div className="tool-bar">
          <a
            href="#"
            onMouseOver={() => setIsShown(true)}
            onMouseOut={() => setIsShown(false)}
            className="language-link"
          >
            <span className="nav-line-1">
              <span className="nav-line-2">
                <span className="flag-img">
                  <img src={india} alt="" srcset="" />
                </span>
                <div className="lang-type">EN</div>
                <span class="material-symbols-outlined nav-arrow">
                  arrow_drop_down
                </span>
              </span>
            </span>
          </a>
          <div className="profile">
            <a href="/" className="profile-link" onMouseOver={() => setAccShow(true)}
             onMouseOut={() => setAccShow(false)}>
              <span className="sign-in">Hello Sign in</span>
              <span className="acc-list">Account & Lists</span>
              <span class="material-symbols-outlined nav-arrow nav-arrow-acc">
                  arrow_drop_down
              </span>
            </a>
          </div>
          <div className="return-order1">
              <a href="/" className="return-order">
              <span className="return">Returns</span>
              <span className="order">& Orders</span>
              </a>
          </div>
          <div className="cart">
            <a href="/" className="nav-cart">
              <span class="material-symbols-outlined cart-icon">
              shopping_cart
              </span>
              <span className="cart-items">0</span>
              <span className="name-cart">Cart</span>
            </a>
          </div>
        </div>
      </div>
      {isShown && (
        <div
          className="show-lang-list"
          onMouseOver={() => setIsShown(true)}
          onMouseOut={() => setIsShown(false)}
        >
          <div className="eng-lang">
            <span class="material-symbols-outlined radio-icon">
              radio_button_checked
            </span>
            <span className="en">English - EN</span>
          </div>
          <div className="disclaimer">
            <h5>This version of Amazon currently avilable only in English.</h5>
            <a href="#" className="learn-more">
              Learn more
            </a>
          </div>
          <div className="details">
            <img src={india} alt="" />You are shopping on Amazon.in
          </div>
        </div>
      )}
      {isAccShow && (
          <div className="show-acc" onMouseOver={() => setAccShow(true)}
          onMouseOut={() => setAccShow(false)}>
            <div className="inner-container">
              <div className="nav-acc-signin">
                <div className="nav-acc-new-signin">
                  <div className="nav-signin">Sign in</div>
                  <div className="new-user-signin">New Customer? <a href="/" className="new-user-link">Start here.</a></div>
                </div>
              </div>
              <div className="left-content">
                <div className="your-list">Your Lists</div>
                <a href="/" className="your-list-link">Create a Wish List</a>
                <a href="/" className="your-list-link">Wish from Any Website</a>
                <a href="/" className="your-list-link">Baby Wishlist</a>
                <a href="/" className="your-list-link">Discover Your Style</a>
                <a href="/" className="your-list-link">Explore Showroom</a>
              </div>
              <div className="right-content">
                <div className="your-account">Your Account</div>
                  <a href="/" className="your-list-link your-account-link">Your Account</a>
                  <a href="/" className="your-list-link your-account-link">Your Order</a>
                  <a href="/" className="your-list-link your-account-link">Your Wish List</a>
                  <a href="/" className="your-list-link your-account-link">Your Recommendations</a>
                  <a href="/" className="your-list-link your-account-link">Your Subscribe & Save Items</a>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

export default NavBar;
