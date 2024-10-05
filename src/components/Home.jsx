import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import IMG1 from "../assets/HomeBanner/IMG1.png";
import IMG2 from "../assets/HomeBanner/IMG2.jpg";
import IMG3 from "../assets/HomeBanner/IMG3.png";
import IMG4 from "../assets/HomeBanner/IMG4.png";
import IMG5 from "../assets/HomeBanner/IMG5.jpg";
import IMG6 from "../assets/HomeBanner/IMG6.jpg";
import IMG7 from "../assets/HomeBanner/IMG7.jpg";
import IMG8 from "../assets/HomeBanner/IMG8.jpg";
import IMG9 from "../assets/HomeBanner/IMG9.jpg";
import HomeImg1 from "../assets/Marquee-New/home1.jpg";
import HomeImg2 from "../assets/Marquee-New/home2.jpg";
import HomeImg3 from "../assets/Marquee-New/home3.webp";
import HomeImg4 from "../assets/Marquee-New/home4.webp";
import HomeImg5 from "../assets/Marquee-New/home5.jpg";
import HomeImg6 from "../assets/Marquee-New/home6.jpeg";
import HomeImg7 from "../assets/Marquee-New/home7.webp";
import HomeImg8 from "../assets/Marquee-New/home8.webp";
import HomeImg9 from "../assets/Marquee-New/home9.jpeg";
import HomeImg10 from "../assets/Marquee-New/home10.webp";
import HomeImg11 from "../assets/Marquee-New/home11.webp";
import HomeImg12 from "../assets/Marquee-New/home12.webp";
import HomeImg13 from "../assets/Marquee-New/home13.webp";
import HomeImg14 from "../assets/Marquee-New/home14.webp";
import TalankeyMarqueeImg5 from "../assets/Marquee/Talankey Marquee Img  (5).webp";
import NewImg1 from "../assets/NewImgs/newImg1.jpeg";
import Advantages from "../assets/HomeBanner/Advantages.png";
import AdvantagesSmall from "../assets/HomeBanner/AdvantagesSmall.png";
import Staad from "../assets/AboutIMG/Staad.png";
import Tekla from "../assets/AboutIMG/Tekla.png";
import ProNest from "../assets/AboutIMG/ProNest.png";
import Autodesk from "../assets/AboutIMG/Autodesk.png";
import Leading from "../assets/HomeBanner/Leading.png";
import LeadingSmall from "../assets/HomeBanner/LeadingSmall.png";
import ClearSpanImage from "../assets/HomeBanner/ClearSpanImage.png";
import DoubleBayImage from "../assets/HomeBanner/DoubleBayImage.png";
import TripleBayImage from "../assets/HomeBanner/TripleBayImage.png";
import FourBaysImage from "../assets/HomeBanner/FourBaysImage.png";
import MultiGableImage from "../assets/HomeBanner/MultiGableImage.png";
import SingleSlopeImage from "../assets/HomeBanner/SingleSlopeImage.png";
import ProductImg1 from "../assets/PEB/prefabricated-multi-storey-steel-building ne structures.webp";
import HomeGallery from "./HomeGallery";
import Gallery from "./Gallery";
import ImageSlider from "./ImageSlider";
import HorizontalSlider from "./HorizontalSlider";
import FAQ from "./FAQ";

function Home() {
  const [activeOption, setActiveOption] = useState("Clear Span");
  const galleryRef = useRef(null);
  const handleScroll = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const options = [
    {
      name: "Clear Span",
      content: (
        <>
          Clear Span frames offer unobstructed space, making them ideal for
          environments where open areas are crucial, such as airplane hangars.
          <br />
          <br />
          <span>How It’s Made: </span>These frames are constructed with
          precision-engineered steel, ensuring maximum durability and stability
          without internal columns.
          <br /> <br />
          <span>Examples: </span>Commonly used in{" "}
          <span className="bold">
            airplane hangars,sports arenas, large warehouses,
          </span>{" "}
          and
          <span className="bold"> industrial facilities</span> requiring
          expansive, open layouts.
        </>
      ),
      image: ClearSpanImage,
    },
    {
      name: "Double Bay, Single Ridge",
      content: (
        <>
          Double Bay, Single Ridge frames are the most common frame type,
          designed to accommodate greater widths with minimal interior columns.
          <br />
          <br />
          <span>How It’s Made: </span>These frames utilize strategically placed
          steel beams to maximize space while maintaining structural integrity,
          reducing the need for multiple internal supports.
          <br /> <br />
          <span>Examples: </span>Commonly used in{" "}
          <span className="bold">
            large manufacturing plants, distribution centers,
          </span>{" "}
          and
          <span className="bold"> commercial buildings </span>where expansive
          floor space is essential.
        </>
      ),
      image: DoubleBayImage,
    },
    {
      name: "Triple Bay, Single Ridge",
      content: (
        <>
          Triple Bay, Single Ridge frames offer expansive widths with additional
          bays, providing extensive open space for industrial operations.
          <br />
          <br />
          <span>How It’s Made: </span> This frame type is designed with multiple
          steel bays and a single ridge, allowing for the integration of cranes
          to facilitate the movement of heavy objects.
          <br /> <br />
          <span>Examples: </span>Ideal for and
          <span className="bold"> factories</span> and
          <span className="bold"> warehouses</span> where cranes are used for
          lifting and transporting heavy materials across large areas.
        </>
      ),
      image: TripleBayImage,
    },
    {
      name: "Four Bays, Single Ridge",
      content: (
        <>
          Four Bays, Single Ridge frames offer expansive space with additional
          bays, enhancing the versatility of the structure.
          <br />
          <br />
          <span>How It’s Made: </span> These frames are designed to support
          mezzanine structures, which add extra space within the building for
          various uses.
          <br /> <br />
          <span>Examples: </span> Commonly used in
          <span className="bold"> warehouses, factories,</span> and
          <span className="bold"> commercial buildings</span> where additional
          space for storage, office areas, or workstations is required.
        </>
      ),
      image: FourBaysImage,
    },
    {
      name: "Multi Gable",
      content: (
        <>
          Multi-Gable structures are designed to provide wider spans across a
          building without significantly increasing its height.
          <br />
          <br />
          <span>How It’s Made: </span> This structure type uses multiple gable
          roofs, allowing for broader coverage and efficient space utilization
          without the need for taller frames.
          <br /> <br />
          <span>Examples: </span> Ideal for
          <span className="bold"> large commercial buildings, warehouses,</span>
          and
          <span className="bold"> industrial facilities</span> where expansive
          horizontal space is needed without a substantial increase in building
          height.
        </>
      ),
      image: MultiGableImage,
    },
    {
      name: "Single Slope",
      content: (
        <>
          Single Slope structures, also known as Monoslope, are primarily used
          for smaller spans, providing a slanted roof that efficiently manages
          water runoff.
          <br />
          <br />
          <span>How It’s Made: </span> These structures feature a single-sloped
          roof, ideal for smaller spaces, offering simple yet effective coverage
          with minimal materials.
          <br /> <br />
          <span>Examples: </span> Commonly used in
          <span className="bold"> parking sheds, storage units, </span>
          and
          <span className="bold"> small industrial facilities</span> where
          compact and efficient shelter is required.
        </>
      ),
      image: SingleSlopeImage,
    },
  ];

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const activeContent = options.find((option) => option.name === activeOption);

  return (
    <div>
      <div className="homeBanner">
        <div className="homeBannerContent">
          <div className="heading">
            <p>
              Tailored Engineering for <br />
              <span>Superior Structures </span>
            </p>
            <sub>
              At NE Structures, we specialize in Pre-Engineered Buildings (PEB),
              Building Information Modeling (BIM), Steel Engineering Structures
              (SES), and High-Rise Steel Structures. Partner with us for
              innovative, reliable solutions that stand the test of time.
            </sub>
            <div className="bannerButton">
              <Link to="/about">
                <sup>Let’s Get Started</sup>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <mask
                    id="mask0_1114_1803"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                  >
                    <rect width="20" height="20" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1114_1803)">
                    <path
                      d="M7.01732 16.6668L5.83398 15.4835L11.3173 10.0002L5.83398 4.51683L7.01732 3.3335L13.684 10.0002L7.01732 16.6668Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="s-banner-wrapper"
          style={{ cursor: "pointer" }}
          onClick={handleScroll}
        >
          <div className="s-banner-marquee">
            <img src={HomeImg1} alt="NE Structures Marquee Img" />
            <img src={HomeImg2} alt="NE Structures Marquee Img" />
            <img src={HomeImg3} alt="NE Structures Marquee Img" />
            <img src={HomeImg4} alt="NE Structures Marquee Img" />
            <img src={HomeImg5} alt="NE Structures Marquee Img" />
            <img src={HomeImg6} alt="NE Structures Marquee Img" />
            <img src={HomeImg7} alt="NE Structures Marquee Img" />
            <img src={HomeImg8} alt="NE Structures Marquee Img" />
            <img src={HomeImg9} alt="NE Structures Marquee Img" />
            <img src={HomeImg10} alt="NE Structures Marquee Img" />
            <img src={HomeImg11} alt="NE Structures Marquee Img" />
            <img src={HomeImg12} alt="NE Structures Marquee Img" />
            <img src={HomeImg13} alt="NE Structures Marquee Img" />
            <img src={HomeImg14} alt="NE Structures Marquee Img" />
            <img src={HomeImg1} alt="NE Structures Marquee Img" />
            <img src={HomeImg2} alt="NE Structures Marquee Img" />
            <img src={HomeImg3} alt="NE Structures Marquee Img" />
            <img src={HomeImg4} alt="NE Structures Marquee Img" />
            <img src={HomeImg5} alt="NE Structures Marquee Img" />
            <img src={HomeImg6} alt="NE Structures Marquee Img" />
            <img src={HomeImg7} alt="NE Structures Marquee Img" />
            <img src={HomeImg8} alt="NE Structures Marquee Img" />
            <img src={HomeImg9} alt="NE Structures Marquee Img" />
            <img src={HomeImg10} alt="NE Structures Marquee Img" />
            <img src={HomeImg11} alt="NE Structures Marquee Img" />
            <img src={HomeImg12} alt="NE Structures Marquee Img" />
            <img src={HomeImg13} alt="NE Structures Marquee Img" />
            <img src={HomeImg14} alt="NE Structures Marquee Img" />
          </div>
        </div>
      </div>
      <div className="homeInfoContainer bannerDownDiv">
        <div className="heading">
          <p>
            Get To Know <br />
            Us Better
          </p>
        </div>
        <div className="homeInfoDetails">
          <div className="s-left">
            <sub>NE Structures</sub>
            <p>
              NE Structures is a premier provider of pre-engineered steel
              building solutions, offering comprehensive services that span
              design, manufacturing, logistics, supply, and project execution.
              With our state-of-the-art manufacturing facility located in
              Bangalore, we deliver custom solutions tailored to meet diverse
              client needs and industry standards. Our expertise extends across
              a wide range of applications, including warehouses, factories,
              aircraft hangars, cold storage facilities, workshops, sports
              halls....
            </p>
            <div className="navbarContact">
              <Link to="/about">
                <p>Read More</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <mask
                    id="mask0_1040_1041"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                  >
                    <rect width="20" height="20" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1040_1041)">
                    <path
                      d="M7.01732 16.6668L5.83398 15.4835L11.3173 10.0002L5.83398 4.51683L7.01732 3.3335L13.684 10.0002L7.01732 16.6668Z"
                      fill="white"
                    />
                  </g>
                </svg>
                <svg
                  className="navbarContactHoverSvg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <mask
                    id="mask0_1044_5987"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                  >
                    <rect width="20" height="20" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1044_5987)">
                    <path
                      d="M13.4791 10.8333H3.33331V9.16667H13.4791L8.81248 4.5L9.99998 3.33333L16.6666 10L9.99998 16.6667L8.81248 15.5L13.4791 10.8333Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </Link>
            </div>
          </div>
          <div className="s-right">
            <img src={IMG5} alt="NE Structures Get to Know Img"></img>
          </div>
        </div>
      </div>
      <div className="homeInfoContainer" style={{ alignItems: "center" }}>
        <div className="heading">
          <p>
            Advantages Of
            <br /> NE Structures as Your Partner
          </p>
          <span>
            When you partner with the best, you get tailored steel solutions,
            designed for efficiency, durability, and cost-effectiveness. NE
            Structures combines innovation with expertise to deliver superior
            results for every project.
          </span>
        </div>
        <div className="homeInfoDetails advantages">
          <div className="dotPosition1">
            <div className="advantagesDots">
              <div className="outerDiv"></div>
              <div className="innerDiv"></div>
            </div>
          </div>
          <div className="dotPosition2">
            <div className="advantagesDots">
              <div className="outerDiv"></div>
              <div className="innerDiv"></div>
            </div>
          </div>
          <div className="dotPosition3">
            <div className="advantagesDots">
              <div className="outerDiv"></div>
              <div className="innerDiv"></div>
            </div>
          </div>
          <div className="dotPosition4">
            <div className="advantagesDots">
              <div className="outerDiv"></div>
              <div className="innerDiv"></div>
            </div>
          </div>
          <div className="dotPosition5">
            <div className="advantagesDots">
              <div className="outerDiv"></div>
              <div className="innerDiv"></div>
            </div>
          </div>
          <div className="dotPosition6">
            <div className="advantagesDots">
              <div className="outerDiv"></div>
              <div className="innerDiv"></div>
            </div>
          </div>
          <picture className="advantagesImg">
            <source media="(max-width: 1200px)" srcSet={AdvantagesSmall} />
            <img src={Advantages} alt="NE Structures Advantages"></img>
            <div className="mobileDot1">
              <div className="advantagesDots">
                <div className="outerDiv"></div>
                <div className="innerDiv"></div>
              </div>
            </div>
            <div className="mobileDot2">
              <div className="advantagesDots">
                <div className="outerDiv"></div>
                <div className="innerDiv"></div>
              </div>
            </div>
            <div className="mobileDot3">
              <div className="advantagesDots">
                <div className="outerDiv"></div>
                <div className="innerDiv"></div>
              </div>
            </div>
            <div className="mobileDot4">
              <div className="advantagesDots">
                <div className="outerDiv"></div>
                <div className="innerDiv"></div>
              </div>
            </div>
            <div className="mobileDot5">
              <div className="advantagesDots">
                <div className="outerDiv"></div>
                <div className="innerDiv"></div>
              </div>
            </div>
            <div className="mobileDot6">
              <div className="advantagesDots">
                <div className="outerDiv"></div>
                <div className="innerDiv"></div>
              </div>
            </div>
          </picture>
        </div>
      </div>
      <div className="homeInfoContainer">
        <div className="heading">
          <p>
            {" "}
            <span>Softwares</span> That Empower Us
          </p>
        </div>
        <div className="homeInfoLogoContainer">
          <img src={Staad} alt="NE Structures Software Support STAAD.Pro"></img>
          <img src={ProNest} alt="NE Structures Software ProNest 2021"></img>
          <img src={Tekla} alt="NE Structures Software Tekla Structures"></img>
          <img src={Autodesk} alt="NE Structures Software Autodesk"></img>
        </div>
      </div>
      <div className="homeInfoContainer">
        <div className="heading">
          <p>
            Delivering
            <br /> Innovative Structures
          </p>
          <span>
            Explore our products and services, from design to execution, we
            deliver comprehensive solutions that are expertly engineered to meet
            your unique construction need.
          </span>
        </div>
        <div
          className="homeInfoDetails "
          style={{ gap: "24px", flexDirection: "column" }}
        >
          <div className="homeInfoheading">Our Products</div>
          <div className="homeInfoSetContainer homeProductInfo">
            <div className="homeInfoSet">
              <div className="homeInfoSetImg">
                <img
                  src={IMG5}
                  alt="NE Structues Pre Engineered Building"
                ></img>
              </div>
              <div className="homeInfoSetDetails">
                <div className="heading">
                  <sub>Pre Engineered Building</sub>
                  <p>
                    NE Structures Pre-Engineered Buildings are designed,
                    fabricated & commissioned matching exact customer’s
                    requirement satisfying all the aspects involved, ensuring it
                    serves to best of its design extent.
                  </p>
                </div>
                <div className="navbarContact">
                  <Link to="/PreEngineeredBuildings">
                    <p>View More</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <mask
                        id="mask0_1040_1041"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                      >
                        <rect width="20" height="20" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_1040_1041)">
                        <path
                          d="M7.01732 16.6668L5.83398 15.4835L11.3173 10.0002L5.83398 4.51683L7.01732 3.3335L13.684 10.0002L7.01732 16.6668Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                    <svg
                      className="navbarContactHoverSvg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <mask
                        id="mask0_1044_5987"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                      >
                        <rect width="20" height="20" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_1044_5987)">
                        <path
                          d="M13.4791 10.8333H3.33331V9.16667H13.4791L8.81248 4.5L9.99998 3.33333L16.6666 10L9.99998 16.6667L8.81248 15.5L13.4791 10.8333Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="homeInfoSet">
              <div className="homeInfoSetImg">
                <img
                  src={ProductImg1}
                  alt="NE Structues High Rise Steel Structures"
                ></img>
              </div>
              <div className="homeInfoSetDetails">
                <div className="heading">
                  <sub>High Rise Steel Structures </sub>
                  <p>
                    NE Structures High-Rise Steel Structures offer unmatched
                    strength and flexibility, designed to support the most
                    ambitious architectural visions. Built for durability and
                    safety, these structures are engineered to stand tall in any
                    skyline.
                  </p>
                </div>
                <div className="navbarContact">
                  <Link to="/HighRiseSteelStructures">
                    <p>View More</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <mask
                        id="mask0_1040_1041"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                      >
                        <rect width="20" height="20" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_1040_1041)">
                        <path
                          d="M7.01732 16.6668L5.83398 15.4835L11.3173 10.0002L5.83398 4.51683L7.01732 3.3335L13.684 10.0002L7.01732 16.6668Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                    <svg
                      className="navbarContactHoverSvg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <mask
                        id="mask0_1044_5987"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                      >
                        <rect width="20" height="20" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_1044_5987)">
                        <path
                          d="M13.4791 10.8333H3.33331V9.16667H13.4791L8.81248 4.5L9.99998 3.33333L16.6666 10L9.99998 16.6667L8.81248 15.5L13.4791 10.8333Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="homeInfoSet">
              <div className="homeInfoSetImg">
                <img
                  src={TalankeyMarqueeImg5}
                  alt="NE Structues Pre Engineered Building"
                ></img>
              </div>
              <div className="homeInfoSetDetails">
                <div className="heading">
                  <sub>Roofing Sheets</sub>
                  <p>
                    NE Structures Roofing Sheets are designed, fabricated, and
                    installed to meet specific customer needs. Our premium
                    roofing solutions ensure durability, weather resistance, and
                    energy efficiency, providing optimal protection and look.
                  </p>
                </div>
                <div className="navbarContact">
                  <Link to="/RoofingSheets">
                    <p>View More</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <mask
                        id="mask0_1040_1041"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                      >
                        <rect width="20" height="20" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_1040_1041)">
                        <path
                          d="M7.01732 16.6668L5.83398 15.4835L11.3173 10.0002L5.83398 4.51683L7.01732 3.3335L13.684 10.0002L7.01732 16.6668Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                    <svg
                      className="navbarContactHoverSvg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <mask
                        id="mask0_1044_5987"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                      >
                        <rect width="20" height="20" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_1044_5987)">
                        <path
                          d="M13.4791 10.8333H3.33331V9.16667H13.4791L8.81248 4.5L9.99998 3.33333L16.6666 10L9.99998 16.6667L8.81248 15.5L13.4791 10.8333Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="homeInfoSet">
              <div className="homeInfoSetImg">
                <img
                  src={IMG7}
                  alt="NE Structues High Rise Steel Structures"
                ></img>
              </div>
              <div className="homeInfoSetDetails">
                <div className="heading">
                  <sub>CZ Purlins </sub>
                  <p>
                    NE Structures CZ Purlins are engineered and manufactured to
                    meet precise customer specifications. Our high-quality
                    purlins provide robust support, ensuring structural
                    integrity and reliability for various applications.
                  </p>
                </div>
                <div className="navbarContact">
                  <Link to="/CZPurlins">
                    <p>View More</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <mask
                        id="mask0_1040_1041"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                      >
                        <rect width="20" height="20" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_1040_1041)">
                        <path
                          d="M7.01732 16.6668L5.83398 15.4835L11.3173 10.0002L5.83398 4.51683L7.01732 3.3335L13.684 10.0002L7.01732 16.6668Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                    <svg
                      className="navbarContactHoverSvg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <mask
                        id="mask0_1044_5987"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                      >
                        <rect width="20" height="20" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_1044_5987)">
                        <path
                          d="M13.4791 10.8333H3.33331V9.16667H13.4791L8.81248 4.5L9.99998 3.33333L16.6666 10L9.99998 16.6667L8.81248 15.5L13.4791 10.8333Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="homeInfoheading">Our Services</div>
          <div className="homeInfoSetContainer">
            <div className="homeInfoSet">
              <div className="homeInfoSetImg">
                <img
                  src={IMG6}
                  alt="NE Structues Structural Engineering Services"
                ></img>
              </div>
              <div className="homeInfoSetDetails">
                <div className="heading">
                  <sub>Structural Engineering Services</sub>
                  <p>
                    NE Structures’ Structural Engineering services provide
                    robust, innovative solutions tailored to ensure safety,
                    stability, and efficiency in every project. We turn complex
                    challenges into enduring structures built to last.
                  </p>
                </div>
                <div className="navbarContact">
                  <Link to="/StructuralEngineeringServices">
                    <p>View More</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <mask
                        id="mask0_1040_1041"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                      >
                        <rect width="20" height="20" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_1040_1041)">
                        <path
                          d="M7.01732 16.6668L5.83398 15.4835L11.3173 10.0002L5.83398 4.51683L7.01732 3.3335L13.684 10.0002L7.01732 16.6668Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                    <svg
                      className="navbarContactHoverSvg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <mask
                        id="mask0_1044_5987"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                      >
                        <rect width="20" height="20" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_1044_5987)">
                        <path
                          d="M13.4791 10.8333H3.33331V9.16667H13.4791L8.81248 4.5L9.99998 3.33333L16.6666 10L9.99998 16.6667L8.81248 15.5L13.4791 10.8333Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="homeInfoSet">
              <div className="homeInfoSetImg">
                <img
                  src={IMG9}
                  alt="NE Structues Building Information Modelling"
                ></img>
              </div>
              <div className="homeInfoSetDetails">
                <div className="heading">
                  <sub>Building Information Modelling</sub>
                  <p>
                    NE Structures' Building Information Modeling services
                    streamline your project with accurate 3D models, enhancing
                    design coordination and reducing errors. Experience smarter,
                    more efficient construction from start to finish.
                  </p>
                </div>
                <div className="navbarContact">
                  <Link to="/BuildingInformationModelling">
                    <p>View More</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <mask
                        id="mask0_1040_1041"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                      >
                        <rect width="20" height="20" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_1040_1041)">
                        <path
                          d="M7.01732 16.6668L5.83398 15.4835L11.3173 10.0002L5.83398 4.51683L7.01732 3.3335L13.684 10.0002L7.01732 16.6668Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                    <svg
                      className="navbarContactHoverSvg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <mask
                        id="mask0_1044_5987"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                      >
                        <rect width="20" height="20" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_1044_5987)">
                        <path
                          d="M13.4791 10.8333H3.33331V9.16667H13.4791L8.81248 4.5L9.99998 3.33333L16.6666 10L9.99998 16.6667L8.81248 15.5L13.4791 10.8333Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="homeLeading">
        <picture>
          <source media="(max-width: 1200px)" srcSet={LeadingSmall} />
          <img src={Leading} alt="NE Structues Leading Img" />
        </picture>
        <div className="heading">
          <sub>
            Leading Provider of
            <br />
            Pre-Engineered Building
            <br /> Steel Structures
          </sub>
          <div className="navbarContact">
            <Link to="/PreEngineeredBuildings">
              <p>Explore Now</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <mask
                  id="mask0_1040_1041"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <rect width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1040_1041)">
                  <path
                    d="M7.01732 16.6668L5.83398 15.4835L11.3173 10.0002L5.83398 4.51683L7.01732 3.3335L13.684 10.0002L7.01732 16.6668Z"
                    fill="white"
                  />
                </g>
              </svg>
              <svg
                className="navbarContactHoverSvg"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <mask
                  id="mask0_1044_5987"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <rect width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1044_5987)">
                  <path
                    d="M13.4791 10.8333H3.33331V9.16667H13.4791L8.81248 4.5L9.99998 3.33333L16.6666 10L9.99998 16.6667L8.81248 15.5L13.4791 10.8333Z"
                    fill="white"
                  />
                </g>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="homeInfoContainer">
        <div className="heading">
          <p>
            Versatile Solutions <br />
            for Every Need
          </p>
        </div>
        <div className="optionsContainer">
          <div className="options">
            {options.map((option) => (
              <p
                key={option.name}
                className={option.name === activeOption ? "active" : ""}
                onClick={() => handleOptionClick(option.name)}
              >
                {option.name}
              </p>
            ))}
          </div>
          <div className="optionsInfoContainer">
            <div className="s-left">
              <h3>{activeContent.name}</h3>
              <div className="divInfo">{activeContent.content}</div>
            </div>
            <div className="s-right">
              <img
                src={activeContent.image}
                alt={`NE Structures ${activeContent.name}`}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <HomeGallery ref={galleryRef} /> */}
      <Gallery ref={galleryRef} />
      <FAQ />
      <div className="homeBrochure">
        <div className="product brochure">
          <div className="p-brochure-main">
            <div className="p-our-brochure-container">
              <div className="p-download-label">
                <p>Want to Know More?</p>
              </div>
              <div className="p-subtext-div">
                <p>
                  Get the full story on our projects and services. Download our
                  brochure for a detailed overview of how we can support your
                  next build.
                </p>
                <div className="p-submit">
                  <a>Download Brochure</a>
                </div>
              </div>
            </div>
            <div className="p-image-gallery-container notMobile">
              <ImageSlider />
              <HorizontalSlider />
            </div>
            <div className="homeInfoDetails mobile">
              <div className="s-banner-wrapper">
                <div className="s-banner-marquee">
                  <div className="s-banner-marquee-set">
                    <img src={IMG1} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG2} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG3} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG4} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG5} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG6} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG7} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG8} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG1} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG2} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG3} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG4} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG5} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG6} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG7} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG8} alt="NE Structures Marquee Img" />
                  </div>
                </div>
              </div>
              <div className="s-banner-wrapper reverse-marquee">
                <div className="s-banner-marquee">
                  <div className="s-banner-marquee-set">
                    <img src={IMG1} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG2} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG3} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG4} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG5} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG6} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG7} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG8} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG1} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG2} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG3} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG4} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG5} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG6} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG7} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG8} alt="NE Structures Marquee Img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
