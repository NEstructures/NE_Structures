import React from "react";
import Brochure from "./Brochure";
import SubmitButton from "./SubmitButton";
import { Helmet } from "react-helmet-async";

function Contact() {
  const openPhoneDialer = () => {
    window.location.href = "tel:+919880939000";
  };
  const openEmailClient = () => {
    window.location.href = "mailto:info@nestructures.co";
  };

  const openMapLocation = () => {
    window.location.href = "https://maps.app.goo.gl/ru4Pg9hBiMVyvWqr5?g_st=iw";
  };
  return (
    <>
      <Helmet>
        <title>Contact NE Structures for Steel Construction Solutions</title>
        <meta
          name="description"
          content="Reach out to NE Structures for custom pre-engineered steel buildings or expert structural services. Let us help you build durable and efficient structures."
        />
      </Helmet>
      <div className="p-contact-background">
        <div className="p-contact-main">
          <div className="p-contact-container">
            <div>
              <div className="p-contact-text-main">
                <div className="p-contact-label">
                  <p>CONTACT US</p>
                </div>
                <div className="p-get-in-touch">
                  <h1>
                    Connect. <span> Build. </span> Excel
                  </h1>
                  <p>
                    Reach out to us with your project details, and our team will
                    respond within 24 hours to help you achieve excellence in
                    every structure.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-contact-form-main">
              <div className="p-connect-with-us">
                <div className="p-connect-label">
                  <h2>Connect With Us</h2>
                </div>

                <div className="p-contact-subtext-container">
                  <div className="p-contact-subtext-div">
                    <div className="p-call-details">
                      <h1>Call Us</h1>
                      <p>Call our team Mon-Fri 9AM-6PM</p>
                    </div>
                    <div className="p-svg-text-div" onClick={openPhoneDialer}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M18.93 20C17.2447 20 15.5167 19.578 13.746 18.734C11.9753 17.89 10.3303 16.705 8.811 15.179C7.29167 13.653 6.11 12.008 5.266 10.244C4.422 8.48 4 6.75533 4 5.07C4 4.76467 4.1 4.51033 4.3 4.307C4.5 4.10367 4.75 4.00133 5.05 4H7.523C7.795 4 8.03233 4.08567 8.235 4.257C8.43767 4.42833 8.57467 4.648 8.646 4.916L9.142 7.3C9.18867 7.58 9.18033 7.82433 9.117 8.033C9.05367 8.24167 8.94267 8.41267 8.784 8.546L6.59 10.592C7.00067 11.3367 7.45433 12.0287 7.951 12.668C8.44767 13.3073 8.97767 13.913 9.541 14.485C10.121 15.065 10.7457 15.605 11.415 16.105C12.0843 16.6043 12.819 17.0757 13.619 17.519L15.758 15.342C15.9207 15.1667 16.1037 15.051 16.307 14.995C16.5097 14.9397 16.7343 14.9287 16.981 14.962L19.084 15.392C19.356 15.4587 19.5767 15.5957 19.746 15.803C19.9153 16.0103 20 16.2477 20 16.515V18.95C20 19.25 19.898 19.5 19.694 19.7C19.49 19.9 19.2347 20 18.93 20ZM6.12 9.654L8.04 7.889C8.10333 7.83767 8.14467 7.767 8.164 7.677C8.184 7.587 8.18067 7.50367 8.154 7.427L7.711 5.307C7.685 5.205 7.64 5.12833 7.576 5.077C7.512 5.02567 7.429 5 7.327 5H5.275C5.19833 5 5.13433 5.02567 5.083 5.077C5.03167 5.12833 5.006 5.19233 5.006 5.269C5.02533 5.95233 5.13233 6.66567 5.327 7.409C5.52167 8.15233 5.78533 8.90067 6.12 9.654ZM14.571 17.988C15.247 18.3227 15.967 18.5703 16.731 18.731C17.4963 18.891 18.163 18.9767 18.731 18.988C18.8077 18.988 18.8717 18.9623 18.923 18.911C18.9743 18.8597 19 18.796 19 18.72V16.712C19 16.61 18.9743 16.5267 18.923 16.462C18.8717 16.398 18.795 16.3533 18.693 16.328L16.843 15.949C16.7657 15.923 16.698 15.9197 16.64 15.939C16.5827 15.959 16.522 16.0007 16.458 16.064L14.571 17.988Z"
                          fill="#111111"
                        />
                      </svg>
                      <p>+91 9880939000</p>
                    </div>
                  </div>
                  <div className="p-contact-subtext-div">
                    <div className="p-call-details">
                      <h1>Mail Us</h1>
                      <p>We are here to help, reach out to us</p>
                    </div>
                    <div className="p-svg-text-div" onClick={openEmailClient}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M4.616 19C4.15533 19 3.771 18.846 3.463 18.538C3.155 18.23 3.00067 17.8453 3 17.384V6.616C3 6.15533 3.15433 5.771 3.463 5.463C3.77167 5.155 4.15567 5.00067 4.615 5H19.385C19.845 5 20.229 5.15433 20.537 5.463C20.845 5.77167 20.9993 6.156 21 6.616V17.385C21 17.845 20.8457 18.2293 20.537 18.538C20.2283 18.8467 19.8443 19.0007 19.385 19H4.616ZM12 12.116L4 6.885V17.385C4 17.5643 4.05767 17.7117 4.173 17.827C4.28833 17.9423 4.436 18 4.616 18H19.385C19.5643 18 19.7117 17.9423 19.827 17.827C19.9423 17.7117 20 17.564 20 17.384V6.884L12 12.116ZM12 11L19.692 6H4.308L12 11ZM4 6.885V6V17.385C4 17.5643 4.05767 17.7117 4.173 17.827C4.28833 17.9423 4.436 18 4.616 18H4V6.885Z"
                          fill="#111111"
                        />
                      </svg>
                      <p>info@nestructures.co</p>
                    </div>
                  </div>
                  <div className="p-contact-subtext-div">
                    <div className="p-call-details">
                      <h1>Visit Us</h1>
                      <p>Experience our expertise in person</p>
                    </div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.3837762632706!2d78.0051768!3d13.201205299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badff7676602955%3A0xd9f47f8c93ac7a0d!2sNE%20Structures!5e0!3m2!1sen!2sin!4v1728039016382!5m2!1sen!2sin"
                      width="10000"
                      height="10050"
                      style={{ border: "0" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div className="p-svg-text-div" onClick={openMapLocation}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 13.5C12.663 13.5 13.2989 13.2366 13.7678 12.7678C14.2366 12.2989 14.5 11.663 14.5 11C14.5 10.337 14.2366 9.70107 13.7678 9.23223C13.2989 8.76339 12.663 8.5 12 8.5C11.337 8.5 10.7011 8.76339 10.2322 9.23223C9.76339 9.70107 9.5 10.337 9.5 11C9.5 11.663 9.76339 12.2989 10.2322 12.7678C10.7011 13.2366 11.337 13.5 12 13.5Z"
                          fill="#111111"
                        />
                        <path
                          d="M19.0717 3.42924H19.0727C22.9777 7.33424 22.9777 13.6662 19.0727 17.5712L13.6697 22.9742C13.2272 23.4164 12.6272 23.6647 12.0017 23.6647C11.3762 23.6647 10.7762 23.4164 10.3337 22.9742L4.9587 17.5992L4.9307 17.5712C1.0257 13.6662 1.0257 7.33424 4.9307 3.42924C8.8357 -0.475762 15.1667 -0.475762 19.0717 3.42924ZM5.9907 4.48924C4.39689 6.08326 3.50152 8.2461 3.50152 10.5002C3.50152 12.7544 4.39689 14.9162 5.9907 16.5102L6.0137 16.5342L6.0157 16.5362L11.3937 21.9142C11.5549 22.0748 11.7732 22.165 12.0007 22.165C12.2282 22.165 12.4465 22.0748 12.6077 21.9142L18.0107 16.5102C19.5857 14.9123 20.465 12.7565 20.457 10.5129C20.4489 8.26925 19.5541 6.1198 17.9677 4.53324C16.3813 2.94667 14.2319 2.05169 11.9883 2.04345C9.74464 2.03521 7.58875 2.91437 5.9907 4.48924Z"
                          fill="#111111"
                        />
                      </svg>
                      <p>
                        Plot No. 28P, KIADB Industrial Area,Road No.25, Vemagal,
                        Kolar 563102
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-contactUs-form">
                <form action="https://formspree.io/f/mbljlbgl" method="POST">
                  <div className="p-first-last-name">
                    <div className="input-wrapper">
                      <input
                        type="text"
                        id="input"
                        required
                        name="FirstName"
                      ></input>
                      <label htmlFor="input" className="placeholder">
                        First name
                      </label>
                    </div>
                    <div className="input-wrapper">
                      <input
                        type="text"
                        id="input"
                        required
                        name="LastName"
                      ></input>
                      <label htmlFor="input" className="placeholder">
                        Last name
                      </label>
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <input type="text" id="input" required name="Email"></input>
                    <label htmlFor="input" className="placeholder">
                      Email address
                    </label>
                  </div>
                  <div className="input-wrapper">
                    <input
                      type="tel"
                      id="input"
                      required
                      pattern="[0-9]{10}"
                      maxLength="10"
                      name="Phone Number"
                    />
                    <label htmlFor="input" className="placeholder">
                      Mobile number
                    </label>
                  </div>
                  <div className="input-wrapper">
                    <textarea
                      id="input"
                      name="Message"
                      className="textarea-input"
                    ></textarea>
                    <label htmlFor="input" className="placeholder textarea">
                      Message
                    </label>
                  </div>
                  <SubmitButton />
                </form>
              </div>
            </div>
          </div>
        </div>
        <Brochure />
      </div>
    </>
  );
}

export default Contact;
