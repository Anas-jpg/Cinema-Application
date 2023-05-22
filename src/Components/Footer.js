import React from "react";
import "./FooterStyle.css";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaGoogle,
  FaAddressBook,
} from "react-icons/fa";

import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineDeliveryDining } from "react-icons/md";

export default function Footer() {
  return (
    <div>
      <footer class="main-footer">
        <div class="container">
          <div class="footer-content">
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div class="logo-widget footer-widget">
                  <div class="text">
                    <h4>
                      Screensizzle is a comprehensive cinema app that not only
                      allows users to book cinema tickets but also offers a wide
                      range of features to enhance their movie watching
                      experience
                    </h4>
                  </div>
                  <ul class="footer-social">
                    <li className="d-inline me-3">
                      <a href="#">
                        <FaFacebookF />
                      </a>
                    </li>

                    <li className="d-inline me-3">
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>

                    <li className="d-inline me-3">
                      <a href="#">
                        <FaGithub />
                      </a>
                    </li>

                    <li className="d-inline me-3">
                      <a href="#">
                        <FaGoogle />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12 offset-lg-2 footer-column">
                <div class="service-widget footer-widget">
                  <div class="footer-title">Contacts</div>
                  <ul class="list">
                    <li>
                      <a href="#">
                        <FaAddressBook></FaAddressBook> +92-31612345
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <AiOutlineMail></AiOutlineMail> screensizzle@info.com
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <MdOutlineDeliveryDining></MdOutlineDeliveryDining> P.O
                        Box 1033 Lahore, Pakistan
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12 footer-widget">
                <div class="contact-widget footer-widget"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div class="footer-bottom">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 column">
              <div class="copyright">
                <a href="#">ScreenSizzle</a> &copy; 2023 All Right Reserved
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 column">
              <ul class="footer-nav">
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
