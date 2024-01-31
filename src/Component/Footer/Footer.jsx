import './Footer.css';
import React from "react";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <div>
      {/* ======= Footer ======= */}
      <footer id="footer" className="mt-5">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>
                  Farmly<span>.</span>
                </h3>
                <p>
                  Ground Floor, Left Wing, MPSEDC STP <br />
                  Building,Indore,Electronic Complex,
                  <br />
                  Sukhlia,Madhya Pradesh 452003 <br />
                  <br />
                  <strong>Phone: 0731-4275767</strong> <br />
                  <strong>Email: contact@farmly.com</strong>
                  <br />
                </p>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" /> <Link to={`/`}>Home</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <Link to={`/AboutUs`}>About us</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <Link to={`/ContactUs`}>ContactUs</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <Link href="#">Terms of service</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <Link href="#">Privacy policy</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                {/* <h4>Working Days</h4>
                <table>
                  <tbody>
                    <tr style={{ height: "23px" }}>
                      <td style={{ height: "23px" }}>MONDAY</td>&nbsp; &nbsp;
                      <td style={{ height: "23px" }}>10:00 am - 7:30 pm</td>
                    </tr>
                    <tr style={{ height: "23px" }}>
                      <td style={{ height: "23px" }}>TUESDAY</td>&nbsp; &nbsp;
                      <td style={{ height: "23px" }}>10:00 am - 7:30 pm</td>
                    </tr>
                    <tr style={{ height: "23px" }}>
                      <td style={{ height: "23px" }}>WEDNESDAY</td>&nbsp; &nbsp;
                      <td style={{ height: "23px" }}>10:00 am - 7:30 pm</td>
                    </tr>
                    <tr style={{ height: "23px" }}>
                      <td style={{ height: "23px" }}>THURSDAY</td>&nbsp; &nbsp;
                      <td style={{ height: "23px" }}>10:00 am - 7:30 pm</td>
                    </tr>
                    <tr style={{ height: "23px" }}>
                      <td style={{ height: "23px" }}>FRIDAY</td>&nbsp; &nbsp;
                      <td style={{ height: "23px" }}>10:00 am - 7:30 pm</td>
                    </tr>
                    <tr style={{ height: "23px" }}>
                      <td style={{ height: "23px" }}>SATURDAY</td>&nbsp; &nbsp;
                      <td style={{ height: "23px" }}>10:00 am - 7:30 pm</td>
                    </tr>
                    <tr style={{ height: "23px" }}>
                      <td style={{ height: "23px" }}>SUNDAY</td>&nbsp; &nbsp;
                      <td style={{ height: "23px" }}>C L O S E D</td>
                    </tr>
                  </tbody>

                </table> */}
              </div>
              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Google Map Location</h4>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.3484988758946!2d75.
                86270497427499!3d22.752444579364067!2m3!1f0!2f0!3f0!3m2!1i1024
                !2i768!4f13.1!3m3!1m2!1s0x39631dda7f0f6299%3A0xeb3565f797c941e!2sAlphaDot%20Technologies%20-%20Java%20%7C%20S
                pringBoot%20%7C%20Microservices%20%7C%20Backend%   
                20Development!5e0!3m2!1sen!2sin!4v1699423335626!5m2!1sen!2sin"
                  width="200" height="200" style={{ border: 0 }} allowfullscreen="" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              © Copyright{" "}
              <strong>
                <span>Farmly</span>
              </strong>
              . All Rights Reserved
            </div>
          </div>
          <div className="social-links text-center text-md-end pt-3 pt-md-0">
            <a href="#" className="twitter">
              <i className="bx bxl-twitter" />
            </a>
            <a href="#" className="facebook">
              <i className="bx bxl-facebook" />
            </a>
            <a href="#" className="instagram">
              <i className="bx bxl-instagram" />
            </a>
            <a href="#" className="google-plus">
              <i className="bx bxl-skype" />
            </a>
            <a href="#" className="linkedin">
              <i className="bx bxl-linkedin" />
            </a>
          </div>
        </div>
      </footer>
      {/* End Footer */}
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
    </div>
  );
}
