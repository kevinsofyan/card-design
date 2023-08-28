import React, { useState } from "react";

export const PhoneMask = ({ phoneNumber }) => {
  const [showNumber, setShowNumber] = useState(false);

  const maskPhoneNumber = (phoneNumber) => {
    const visiblePart = phoneNumber.substring(0, 4);
    const hiddenPart = "XXXX";

    let patern = `${visiblePart}${hiddenPart}`;
    if (phoneNumber.match(/(\d{4}) (\d{4})/g)) {
      patern = `${visiblePart} ${hiddenPart}`;
    }

    return patern;
  };

  const toggleShowNumber = () => {
    setShowNumber(!showNumber);
  };

  return (
    <span>
      <span style={{ cursor: "pointer" }} onClick={() => toggleShowNumber()}>
        {showNumber ? phoneNumber : maskPhoneNumber(phoneNumber)}
      </span>
    </span>
  );
};
