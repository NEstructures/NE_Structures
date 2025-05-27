import React from "react";
import { Link } from "react-router-dom";
import NELogoWhite from "../assets/NELogoWhite.svg";

function Footer() {
  return (
    <div className="Footer">
      <div className="footerContainer">
        <div className="footerLogoContainer">
          <Link to="/">
            <img className="NELogoWhite" src={NELogoWhite}></img>
          </Link>
          <div className="footerIcons">
            <Link className="facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M9.33268 9.00016H10.9993L11.666 6.3335H9.33268V5.00016C9.33268 4.3135 9.33268 3.66683 10.666 3.66683H11.666V1.42683C11.4487 1.39816 10.628 1.3335 9.76135 1.3335C7.95135 1.3335 6.66602 2.43816 6.66602 4.46683V6.3335H4.66602V9.00016H6.66602V14.6668H9.33268V9.00016Z"
                  fill="white"
                />
              </svg>
            </Link>
            <Link className="twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clipPath="url(#clip0_359_2930)">
                  <path
                    d="M12.6007 0.768677H15.054L9.694 6.89534L16 15.2307H11.0627L7.196 10.1747L2.77067 15.2307H0.316L6.04933 8.67734L0 0.769343H5.06267L8.558 5.39068L12.6007 0.768677ZM11.74 13.7627H13.0993L4.324 2.16001H2.86533L11.74 13.7627Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_359_2930">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <Link className="linkedIn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3.16667 1.25C2.79094 1.25 2.43061 1.39926 2.16493 1.66493C1.89926 1.93061 1.75 2.29094 1.75 2.66667C1.75 3.04239 1.89926 3.40272 2.16493 3.6684C2.43061 3.93408 2.79094 4.08333 3.16667 4.08333C3.54239 4.08333 3.90272 3.93408 4.1684 3.6684C4.43408 3.40272 4.58333 3.04239 4.58333 2.66667C4.58333 2.29094 4.43408 1.93061 4.1684 1.66493C3.90272 1.39926 3.54239 1.25 3.16667 1.25ZM1.83333 5.25C1.81123 5.25 1.79004 5.25878 1.77441 5.27441C1.75878 5.29004 1.75 5.31123 1.75 5.33333V14C1.75 14.046 1.78733 14.0833 1.83333 14.0833H4.5C4.5221 14.0833 4.5433 14.0746 4.55893 14.0589C4.57455 14.0433 4.58333 14.0221 4.58333 14V5.33333C4.58333 5.31123 4.57455 5.29004 4.55893 5.27441C4.5433 5.25878 4.5221 5.25 4.5 5.25H1.83333ZM6.16667 5.25C6.14457 5.25 6.12337 5.25878 6.10774 5.27441C6.09211 5.29004 6.08333 5.31123 6.08333 5.33333V14C6.08333 14.046 6.12067 14.0833 6.16667 14.0833H8.83333C8.85543 14.0833 8.87663 14.0746 8.89226 14.0589C8.90789 14.0433 8.91667 14.0221 8.91667 14V9.33333C8.91667 9.00181 9.04836 8.68387 9.28278 8.44945C9.5172 8.21503 9.83515 8.08333 10.1667 8.08333C10.4982 8.08333 10.8161 8.21503 11.0506 8.44945C11.285 8.68387 11.4167 9.00181 11.4167 9.33333V14C11.4167 14.046 11.454 14.0833 11.5 14.0833H14.1667C14.1888 14.0833 14.21 14.0746 14.2256 14.0589C14.2412 14.0433 14.25 14.0221 14.25 14V8.25333C14.25 6.63533 12.8433 5.37 11.2333 5.516C10.7352 5.56135 10.2472 5.68463 9.78733 5.88133L8.91667 6.25467V5.33333C8.91667 5.31123 8.90789 5.29004 8.89226 5.27441C8.87663 5.25878 8.85543 5.25 8.83333 5.25H6.16667Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="footerColumns">
          <div className="footerColumnSet">
            <p className="heading">Useful Links</p>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/contact">Location</Link>
          </div>
          <div className="footerColumnSet">
            <p className="heading">Services</p>
            <Link to="/StructuralEngineeringServices">
              Structural Engineering Services
            </Link>
            <Link to="/BuildingInformationModelling">
              Building Information Modelling
            </Link>
            <p className="heading">Products</p>
            <Link to="/PreEngineeredBuildings">Pre Engineering Buildings</Link>
            <Link to="/HighRiseSteelStructures">High Rise Steel Buildings</Link>
          </div>
          <div className="footerColumnSet">
            <p className="heading">Legal</p>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
            <Link to="/">Cookies</Link>
            <Link to="/">Copyright Policy</Link>
          </div>
        </div>
      </div>
      <div className="footerSlogan">
        <p className="heading">Our Materials Makes Difference</p>
        <p>Transforming Every Project with Sustainable Excellence</p>
      </div>
      <div className="footerCopyrights">
        <p>2024 All rights reserved</p>
        <p>
          Crafted by{" "}
          <a href="https://www.koiostudio.com/" target="_blank">
            The Koios Studio
          </a>
        </p>
      </div>
      <div className="mobileFooterHeading">
        <div className="heading">
          <Link to="/">
            <img src={NELogoWhite} className="mobileNELogoWhite"></img>
          </Link>
          <sub>2024 All rights reserved</sub>
        </div>
        <div className="content">
          <p>Our Materials Makes Difference</p>
          <span>
            Transforming Every Project with <br /> Sustainable Excellence
          </span>
        </div>
      </div>
      <div className="mobileFooterLinks">
        <div className="mobileFooterLinksContainer">
          <div className="mobileFooterLinkSet">
            <sub>Useful Links</sub>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/contact">Location</Link>
            <Link to=""></Link>
          </div>
          <div className="mobileFooterLinkSet">
            <sub>Product</sub>
            <Link to="/PreEngineeredBuildings">Pre Engineering Buildings</Link>
            <Link to="/HighRiseSteelStructures">High Rise Steel Buildings</Link>
            <Link to="/RoofingSheets">Roofing Sheets</Link>
            <Link to="/CZPurlins">CZ - Purlins</Link>
          </div>
        </div>
        <div className="mobileFooterLinksContainer">
          <div className="mobileFooterLinkSet">
            <sub>Service</sub>
            <Link to="/StructuralEngineeringServices">
              Structural Engineering Services
            </Link>
            <Link to="/BuildingInformationModelling">
              Building Information Modelling
            </Link>
          </div>
          <div className="mobileFooterLinkSet">
            <sub>Product</sub>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
            <Link to="/">Cookies</Link>
            <Link to="/">Copyright Policy</Link>
          </div>
        </div>
      </div>
      <div className="mobileFooterCopyrigths">
        <div className="mobileFooterLogos">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                d="M9.33342 9.93034H11.0001L11.6667 7.26367H9.33342V5.93034C9.33342 5.24367 9.33342 4.59701 10.6667 4.59701H11.6667V2.35701C11.4494 2.32834 10.6287 2.26367 9.76208 2.26367C7.95208 2.26367 6.66675 3.36834 6.66675 5.397V7.26367H4.66675V9.93034H6.66675V15.597H9.33342V9.93034Z"
                fill="white"
              />
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <g clipPath="url(#clip0_1300_1546)">
                <path
                  d="M12.6007 1.69873H15.054L9.694 7.8254L16 16.1607H11.0627L7.196 11.1047L2.77067 16.1607H0.316L6.04933 9.6074L0 1.6994H5.06267L8.558 6.32073L12.6007 1.69873ZM11.74 14.6927H13.0993L4.324 3.09006H2.86533L11.74 14.6927Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1300_1546">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0 0.930176)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                d="M3.16667 2.18018C2.79094 2.18018 2.43061 2.32943 2.16493 2.59511C1.89926 2.86078 1.75 3.22112 1.75 3.59684C1.75 3.97257 1.89926 4.3329 2.16493 4.59858C2.43061 4.86425 2.79094 5.01351 3.16667 5.01351C3.54239 5.01351 3.90272 4.86425 4.1684 4.59858C4.43408 4.3329 4.58333 3.97257 4.58333 3.59684C4.58333 3.22112 4.43408 2.86078 4.1684 2.59511C3.90272 2.32943 3.54239 2.18018 3.16667 2.18018ZM1.83333 6.18018C1.81123 6.18018 1.79004 6.18896 1.77441 6.20458C1.75878 6.22021 1.75 6.24141 1.75 6.26351V14.9302C1.75 14.9762 1.78733 15.0135 1.83333 15.0135H4.5C4.5221 15.0135 4.5433 15.0047 4.55893 14.9891C4.57455 14.9735 4.58333 14.9523 4.58333 14.9302V6.26351C4.58333 6.24141 4.57455 6.22021 4.55893 6.20458C4.5433 6.18896 4.5221 6.18018 4.5 6.18018H1.83333ZM6.16667 6.18018C6.14457 6.18018 6.12337 6.18896 6.10774 6.20458C6.09211 6.22021 6.08333 6.24141 6.08333 6.26351V14.9302C6.08333 14.9762 6.12067 15.0135 6.16667 15.0135H8.83333C8.85543 15.0135 8.87663 15.0047 8.89226 14.9891C8.90789 14.9735 8.91667 14.9523 8.91667 14.9302V10.2635C8.91667 9.93199 9.04836 9.61405 9.28278 9.37962C9.5172 9.1452 9.83515 9.01351 10.1667 9.01351C10.4982 9.01351 10.8161 9.1452 11.0506 9.37962C11.285 9.61405 11.4167 9.93199 11.4167 10.2635V14.9302C11.4167 14.9762 11.454 15.0135 11.5 15.0135H14.1667C14.1888 15.0135 14.21 15.0047 14.2256 14.9891C14.2412 14.9735 14.25 14.9523 14.25 14.9302V9.18351C14.25 7.56551 12.8433 6.30018 11.2333 6.44618C10.7352 6.49152 10.2472 6.6148 9.78733 6.81151L8.91667 7.18484V6.26351C8.91667 6.24141 8.90789 6.22021 8.89226 6.20458C8.87663 6.18896 8.85543 6.18018 8.83333 6.18018H6.16667Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
        <p>
          Crafted by{" "}
          <a href="https://www.koiostudio.com/" target="_blank">
            The Koios Studio
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
