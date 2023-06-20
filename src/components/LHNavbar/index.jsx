import React, { useState } from "react";
import "../../styles.css";
import LearnLanguageFilter from "../LearnLanguageFilter";

const LeftNavbar = () => {
  const [englishOnly, setEnglishOnly] = useState();
  const [frenchOnly, setFrenchOnly] = useState();
  const [germanOnly, setGermanOnly] = useState();
  const [dutchOnly, setDutchOnly] = useState();
  const [italianOnly, setItalianOnly] = useState();

  return (
    <div className="left-navbar">
      <br></br>
      <br></br>
      <LearnLanguageFilter
        englishOnly={englishOnly}
        frenchOnly={frenchOnly}
        germanOnly={germanOnly}
        dutchOnly={dutchOnly}
        italianOnly={italianOnly}
        setEnglishOnly={setEnglishOnly}
        setFrenchOnly={setFrenchOnly}
        setGermanOnly={setGermanOnly}
        setDutchOnly={setDutchOnly}
        setItalianOnly={setItalianOnly}
      />
    </div>
  );
};

export default LeftNavbar;
