import React from "react";
import Logo from "./Logo";
import "./topbar.css";

const Topbar = () => {
  return (
    <div class="wrapper">
      <header class="header-menu">
        <div class="max-container">
          <div class="logo">
            <Logo />
          </div>
          <div id="changeCL">
            <div class="changer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="flag-icon-css-be"
                viewBox="0 0 640 480"
              >
                <g fill-rule="evenodd" stroke-width="1pt">
                  <path d="M0 0h213.3v480H0z" />
                  <path fill="#ffd90c" d="M213.3 0h213.4v480H213.3z" />
                  <path fill="#f31830" d="M426.7 0H640v480H426.7z" />
                </g>
              </svg>
              <i class="fa fa-chevron-down"></i>
            </div>
            <ul class="changeCL-hover">
              <li class="show-change-country">Change country</li>
            </ul>
          </div>
          <div id="show-search">
            <i class="fa fa-search"></i>
          </div>
          <button
            id="hamburger"
            class="hamburger hamburger--slider"
            type="button"
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
          <div id="subscribe-button" class="show-newsletter">
            <i class="fa fa-envelope-open-text"></i>
            <span>SUBSCRIBE</span>
          </div>
          <div class="main-menu">
            <ul id="mainmenu">
              <li class="home">
                <i class="fa fa-home"></i>
              </li>
              <li class="submenu">
                <a>
                  who we are <i class="fa fa-chevron-down"></i>
                </a>
              </li>
              <li>
                <a>news & insights</a>
              </li>
              <li class="active">
                <a>Products</a>
              </li>
              <li class="submenu ">
                <a> 
                  Services <i class="fa fa-chevron-down"></i>
                </a>
              </li>
              <li class="submenu ">
                <a>
                  {" "}
                  ESG <i class="fa fa-chevron-down"></i>
                </a>
              </li>
              <li>
                <a>Global presence</a>
              </li>
              <li class="contact">
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Topbar;
