import Link from "next/link";

const DefaultFooter = () => {
  return (
    <div className="footer-middle new-style">
      <div className="container">
        <div className="footer-bg">
          <div className="row">
            {/* Left Section with Logo and Description */}
            <div className="col-lg-3 col-sm-6">
              <div className="widget widgets-company-info mb-4 mb-lg-0">
                <div className="footer-new-logo">
                  <img src="assets/images/logo.png" alt="The Masterminds International Logo" />
                </div>
                <div className="company-info-desc">
                  <p>The Masterminds International Operations & Accreditation</p>
                </div>
                <div className="follow-company-icon">
                  <a className="social-icon-color" href="#">
                    <i className="bi bi-facebook" />
                  </a>
                  <a className="social-icon-color2" href="#">
                    <i className="bi bi-instagram" />
                  </a>
                  <a className="social-icon-color1" href="#">
                    <i className="bi bi-twitter" />
                  </a>
                  <a className="social-icon-color3" href="#">
                    <i className="bi bi-youtube" />
                  </a>
                  <a className="social-icon-color4" href="#">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
            </div>

            {/* Middle Section with Services */}
            <div className="col-lg-6 col-sm-12">
              <div className="widget widget-services">
                <h4 className="widget-title">Our Services</h4>
                <ul className="footer-menu">
                  <li>Business Management and Strategy</li>
                  <li>Human Resource Management & System</li>
                  <li>ISO International Quality Certification</li>
                  <li>360 Software Solutions</li>
                  <li>International Business Networking and Opportunities</li>
                  <li>Professional Courses</li>
                  <li>Professional Licensing Programs</li>
                </ul>
              </div>
            </div>

            {/* Right Section with Contact Information */}
            <div className="col-lg-3 col-sm-6">
              <div className="widget widget-contact">
                <h4 className="widget-title">Contact Us</h4>
                <div className="contact-item">
                  <h5>ESWATINI / SWAZILAND:</h5>
                  <span>Phone: +268 7844 6897 / +268 7828 6957</span>
                </div>
                <div className="contact-item">
                  <h5>DURBAN, SOUTH AFRICA:</h5>
                  <span>Phone: +27 81 270 6832</span>
                </div>
                <div className="contact-item">
                  <h5>ABU DHABI / DUBAI:</h5>
                  <span>Phone: +971 50 784 5757</span>
                </div>
                <div className="contact-item">
                  <h5>CHENNAI:</h5>
                  <span>Phone: +91 98415 88775 / +91 89390 740000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Area */}
      <div className="footer-bottom-area d-flex align-items-center">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-7">
              <div className="footer-bottom-content">
                <div className="footer-bottom-content-copy">
                  <p>Copyright © The Masterminds International. All rights reserved.</p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="footer-bottom-menu">
                <ul>
                  <li>
                    <Link legacyBehavior href="/">
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="#">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="service">
                      <a>Services</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultFooter;
