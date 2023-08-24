import React from "react";
import "./styles.scss";
import BuildingIcon from "./assets/building-icon.svg";
import LazyLoad from "react-lazy-load";

import ArrowLeftIcon from "./assets/arrow-left.png";
import RibbonLaunching from "./assets/ribbon-launching.png";
import { formattedNumber } from "./utils/numberFormater";
import { useEffect, useState } from "react";
import { PhoneMask } from "./components/phoneMask";

const ListingAd = React.memo(
  ({
    pic,
    title,
    address,
    description,
    psf_min,
    psf_max,
    subprice_label,
    project_type,
    ownership_type,
    availabilities_label,
    year,
  }) => {
    const [showDescription, setShowDescription] = useState(false);

    let formattedDescription = description.replace(/(\d{4}) (\d{4})/g, "$1$2");
    const descriptionLines = formattedDescription.split("\n");

    const processedText = descriptionLines.map((line, index) => {
      const phoneNumbers = line.match(/\d{8}/g);
      if (phoneNumbers) {
        let lastIndex = 0;
        const elements = [];
        phoneNumbers.forEach((phoneNumber, i) => {
          const beforePhoneNumber = line.substring(
            lastIndex,
            line.indexOf(phoneNumber, lastIndex)
          );
          lastIndex = line.indexOf(phoneNumber, lastIndex) + phoneNumber.length;
          elements.push(beforePhoneNumber);
          elements.push(<PhoneMask key={i} phoneNumber={phoneNumber} />);
        });
        elements.push(line.substring(lastIndex));
        return (
          <span key={index}>
            {elements.map((element, i) => (
              <span key={i}>{element}</span>
            ))}
            <br />
          </span>
        );
      }
      return (
        <span key={index}>
          {line}
          <br />
        </span>
      );
    });

    return (
      <div className="App">
        <img src={RibbonLaunching} className="ribbon" />
        <div className="mainPic">
          <img
            src={`${pic},format&w=544q=100`}
            srcset={`
			${pic},format&w=343&q=100,
			${pic},format&w=544&q=100 544w`}
            alt={title}
            className="pic"
            loading="lazy"
            fetchpriority="high"
          />
          <button className="arrow arrow--left">
            <img src={ArrowLeftIcon} />
          </button>
          <button className="arrow arrow--right">
            <img src={ArrowLeftIcon} />
          </button>
        </div>
        <div className="mainContent container">
          <div className="row">
            <div className="col">
              <div className="title">
                <div className="title__icon">
                  <img src={BuildingIcon} />
                </div>
                <div className="title__info">
                  <h1>{title}</h1>
                  <address>{address}</address>
                </div>
              </div>
              <div className="detail">
                <ul>
                  <li>{project_type}</li>
                  <li>{year}</li>
                  <li>{ownership_type}</li>
                </ul>
                <p>{availabilities_label}</p>
              </div>
            </div>
            <div className="col">
              <div className="price">
                <h2>{`${formattedNumber(psf_min)} - ${formattedNumber(
                  psf_max
                )} psf`}</h2>
                <label>{subprice_label}</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div
                className={`description ${
                  showDescription ? "description--open" : ""
                }`}
              >
                {processedText}
              </div>
            </div>
          </div>
          <div className="row row--align-end">
            <div className="col">
              <button
                className="show-btn"
                onClick={() => setShowDescription(!showDescription)}
              >
                {showDescription ? "Hide description" : "See description"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default ListingAd;
