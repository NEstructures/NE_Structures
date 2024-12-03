import React, { useState, useEffect, forwardRef, useRef } from "react";
import IMG1 from "../assets/HomeBanner/IMG1.png";
import IMG2 from "../assets/HomeBanner/IMG2.jpg";
import IMG3 from "../assets/HomeBanner/IMG3.png";
import IMG4 from "../assets/HomeBanner/IMG4.png";
import IMG5 from "../assets/HomeBanner/IMG5.jpg";
import IMG6 from "../assets/HomeBanner/IMG6.jpg";
import IMG7 from "../assets/HomeBanner/IMG7.jpg";
import IMG8 from "../assets/HomeBanner/IMG8.jpg";

const setHeight = 714;
const gap = 20;
const padding = 20;

const gallerySets = [
  {
    heading: "BIAL Waste Management Project @ Bangalore Airport",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi elementum pretium tortor nulla. Ut at fermentum.",
    images: [IMG4, IMG8, IMG6, IMG2, IMG3, IMG5],
  },
  {
    heading: "Lorem Ipsum 456",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi elementum pretium tortor nulla. Ut at fermentum.",
    images: [IMG7, IMG3, IMG8, IMG1, IMG4],
  },
  {
    heading: "Lorem Ipsum 123",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi elementum pretium tortor nulla. Ut at fermentum.",
    images: [IMG6, IMG1, IMG5, IMG2, IMG6, IMG7, IMG8],
  },
  {
    heading: "Lorem Ipsum 789",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi elementum pretium tortor nulla. Ut at fermentum.",
    images: [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8],
  },
];

const HomeGallery = forwardRef((props, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    gallerySets.map(() => 0)
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const [galleryWidth, setGalleryWidth] = useState(0); // State to store the width of the container
  const galleryContainerRef = useRef(null); // Ref to the gallery container

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1200);
    if (galleryContainerRef.current) {
      setGalleryWidth(galleryContainerRef.current.offsetWidth);
    }
  };

  const handleUpClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleDownClick = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, gallerySets.length - 1)
    );
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // Call it on mount to get the initial size
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const intervals = gallerySets.map((set, setIndex) =>
      setInterval(() => {
        setCurrentImageIndexes((prevIndexes) => {
          const newIndexes = [...prevIndexes];
          newIndexes[setIndex] = (newIndexes[setIndex] + 1) % set.images.length;
          return newIndexes;
        });
      }, 5000)
    );

    return () => {
      intervals.forEach(clearInterval);
    };
  }, []);

  const setWidth = galleryWidth;

  return (
    <div className="homeInfoContainer" ref={ref} id="home-gallery">
      <div className="heading">
        <p>
          Get To Know <br />
          Us Better
        </p>
        <span>
          Lorem ipsum dolor sit amet consectetur. Egestas non pellentesque eget
          adipiscing euismod sed. Egestas lorem orci enim at. Vitae etiam arcu.
        </span>
      </div>
      <div className="homeGalleryContainer" ref={galleryContainerRef}>
        <div className="homeGalleryControl">
          <svg
            onClick={handleUpClick}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="galleryUp"
            style={{ opacity: currentIndex === 0 ? 0.3 : 1 }}
          >
            <mask
              id="mask0_989_13453"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect
                x="24"
                width="24"
                height="24"
                transform="rotate(90 24 0)"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_989_13453)">
              <path
                d="M4 16L12 8L20 16L18.58 17.42L12 10.84L5.42 17.42L4 16Z"
                fill="#111111"
              />
            </g>
          </svg>
          <div className="galleryIndicatorDiv">
            {gallerySets.map((_, index) => (
              <div
                key={index}
                className={`galleryIndicatorDot ${
                  currentIndex === index ? "active" : ""
                }`}
              ></div>
            ))}
          </div>
          <svg
            onClick={handleDownClick}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="galleryDown"
            style={{
              opacity: currentIndex === gallerySets.length - 1 ? 0.3 : 1,
            }}
          >
            <mask
              id="mask0_989_13453"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect
                x="24"
                width="24"
                height="24"
                transform="rotate(90 24 0)"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_989_13453)">
              <path
                d="M4 16L12 8L20 16L18.58 17.42L12 10.84L5.42 17.42L4 16Z"
                fill="#111111"
              />
            </g>
          </svg>
        </div>
        <div
          className="homeGallerySetContainer"
          style={{
            width: isMobile ? `${gallerySets.length * setWidth}px` : "100%",
            transform: isMobile
              ? `translateX(-${currentIndex * setWidth}px)`
              : `translateY(-${currentIndex * (setHeight + gap)}px)`,
          }}
        >
          {gallerySets.map((set, index) => (
            <div
              className="homeGallerySet"
              key={index}
              style={{ width: `${setWidth}px` }}
            >
              <div className="heading">
                <sub>{set.heading}</sub>
                <p>{set.description}</p>
              </div>
              {set.images.slice(0, 4).map((image, idx) => (
                <div key={idx} className={`position${idx + 1}`}>
                  <img
                    src={
                      set.images[
                        (currentImageIndexes[index] + idx) % set.images.length
                      ]
                    }
                    alt={set.heading}
                  ></img>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default HomeGallery;
