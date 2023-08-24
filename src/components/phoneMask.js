import React, { useState } from "react";

export const PhoneMask = ({ phoneNumber }) => {
  const [showNumber, setShowNumber] = useState(false);

  const maskPhoneNumber = (phoneNumber) => {
    const visiblePart = phoneNumber.substring(0, 4);
    const hiddenPart = "XXXX";
    return `${visiblePart}${hiddenPart}`;
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
