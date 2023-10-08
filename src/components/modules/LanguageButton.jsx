import React, { useState } from "react";

import LanguagePng from "../../assets/Language.png";
import Iran from "../../assets/iran.png";
import England from "../../assets/england.png";

const LanguageButton = () => {
  const [open, setOpen] = useState(false);

  const [value, setValue] = useState({
    value: "PR",
    icon: LanguagePng,
  });


  //change value button
  const changeValue = ({ value, icon }) => {
    setValue({
      value,
      icon,
    });
    
  };

  return (
    <>
      <div
        className={`${open ? "languageButton active" : "languageButton"} `}
        onClick={() => setOpen(!open)}
      >
        {value.value} <img src={value.icon} alt="icon" />
        {open && (
          <ul className="dropdown">
            <li onClick={() => changeValue({ value: "PR", icon: Iran })}>
              <img src={Iran} alt="icon" />
              PR
            </li>
            <li onClick={() => changeValue({ value: "EN", icon: England })}>
              <img src={England} alt="icon" />
              EN
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default LanguageButton;
