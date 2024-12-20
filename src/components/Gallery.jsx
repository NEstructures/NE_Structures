import React, { useState, useRef, useEffect, forwardRef } from "react";

import IMG10 from "../assets/Gail/gail1.jpg";
import IMG16 from "../assets/Gail/gail2.jpg";
import IMG12 from "../assets/Kia-Sahen/kia2.jpg";
import IMG11 from "../assets/Kia-Sahen/kia1.jpg";
import IMG13 from "../assets/Airport/airport1.jpg";
import IMG14 from "../assets/Airport/airport2.jpg";
import IMG15 from "../assets/Airport/airport3.jpg";

import HomeImg15 from "../assets/Marquee-New/home15.jpeg";
import HomeImg16 from "../assets/Marquee-New/home16.jpeg";
import HomeImg17 from "../assets/Marquee-New/home17.jpeg";
import HomeImg18 from "../assets/Marquee-New/home18.jpeg";
import HomeImg19 from "../assets/Marquee-New/home19.jpeg";

const Gallery = forwardRef((props, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const newGalleryRef = useRef(null);
  const [galleryWidth, setGalleryWidth] = useState(0);

  const images = [
    IMG15,
    IMG10,
    IMG12,
    IMG13,
    IMG16,
    IMG11,
    IMG14,
    HomeImg15,
    HomeImg16,
    HomeImg17,
    HomeImg18,
    HomeImg19,
  ];

  const captions = [
    "BIAL Waste Management Project @ Bangalore Airport",
    "GAIL Project",
    "KIA-SAHEN Project",
    "BIAL Waste Management Project @ Bangalore Airport",
    "GAIL Project",
    "KIA-SAHEN Project",
    "BIAL Waste Management Project @ Bangalore Airport",
  ];

  useEffect(() => {
    if (newGalleryRef.current) {
      setGalleryWidth(newGalleryRef.current.offsetWidth);
    }

    const handleResize = () => {
      if (newGalleryRef.current) {
        setGalleryWidth(newGalleryRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div
      className="homeInfoContainer newGalleryContainer"
      style={{ alignItems: "center" }}
      ref={ref}
      id="home-gallery"
    >
      <div className="heading">
        <p>
          Showcasing
          <br /> Our stories
        </p>
        <span>
          At NE Structures, we prioritize clear communication and tailored
          solutions to meet every client's specific needs.
        </span>
      </div>
      <div className="homeInfoDetails">
        <div className="s-left">
          <p>
            NE Structures consistently delivers high-quality, on-time projects
            tailored to our clients' unique requirements. Our expertise in
            design, engineering, and execution ensures every structure meets the
            highest standards of durability and precision. Discover the trusted
            partnerships we've built through successful project delivery.
          </p>
          <div className="galleryNumberDiv">
            <div className="subHeading">
              <p>25+</p>
              <span>Happy Clients</span>
            </div>
            <div className="subHeading">
              <p>0.5 M Ton</p>
              <span>Tonnage Delivered</span>
            </div>
            <div className="subHeading">
              <p>100+</p>
              <span>Projects</span>
            </div>
          </div>
        </div>
        <div className="s-right newGallery" ref={newGalleryRef}>
          <div
            className="newGallerySlide"
            style={{
              display: "flex",
              transition: "transform 0.5s ease-in-out",
              transform: `translateX(-${currentIndex * galleryWidth}px)`,
            }}
          >
            {images.map((image, index) => (
              <div key={index} style={{ flexShrink: 0, width: "100%" }}>
                <img
                  src={image}
                  style={{ width: "100%" }}
                  alt={`NE Structures Gallery Img ${index + 1}`}
                />
                <p className="s-galleryImgText">{captions[index]}</p>
              </div>
            ))}
          </div>
          <div className="newGalleryControls">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="prevImg"
              onClick={prevImage}
              style={{
                cursor: "pointer",
                opacity: currentIndex === 0 ? 0.5 : 1,
              }}
            >
              <mask
                id="mask0_1561_5752"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="32"
                height="32"
              >
                <rect
                  y="32"
                  width="32"
                  height="32"
                  transform="rotate(-90 0 32)"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_1561_5752)">
                <path
                  d="M23.9993 16L15.9993 24L14.1327 22.1333L18.9327 17.3333H6.66602L6.66602 14.6667H18.9327L14.1327 9.86667L15.9993 8L23.9993 16Z"
                  fill="#111111"
                />
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="nextImg"
              onClick={nextImage}
              style={{
                cursor: "pointer",
                opacity: currentIndex === images.length - 1 ? 0.5 : 1,
              }}
            >
              <mask
                id="mask0_1561_5752"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="32"
                height="32"
              >
                <rect
                  y="32"
                  width="32"
                  height="32"
                  transform="rotate(-90 0 32)"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_1561_5752)">
                <path
                  d="M23.9993 16L15.9993 24L14.1327 22.1333L18.9327 17.3333H6.66602L6.66602 14.6667H18.9327L14.1327 9.86667L15.9993 8L23.9993 16Z"
                  fill="#111111"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Gallery;
