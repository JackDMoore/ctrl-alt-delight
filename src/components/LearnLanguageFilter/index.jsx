import React from "react";

const LearnLanguageFilter = (props) => {
  function setEnglish() {
    props.setEnglishOnly(!props.englishOnly)
  }

  function setFrench() {
    props.setFrenchOnly(!props.frenchOnly)
  }

  function setGerman() {
    props.setGermanOnly(!props.germanOnly)
  }

  function setDutch() {
    props.setDutchOnly(!props.dutchOnly)
  }

  function setItalian() {
    props.setItalianOnly(!props.italianOnly)
  }

  return (
  <div className="language-filters">
    <label>
      English &nbsp;
      <input
        aria-label="English"
        type="checkbox"
        checked={props.englishOnly}
        onChange={setEnglish}
      ></input>
    </label>
    <label>
    &nbsp;&nbsp;&nbsp;French &nbsp;
      <input
        aria-label="French"
        type="checkbox"
        checked={props.frenchOnly}
        onChange={setFrench}
      ></input>
    </label>
    <label>
    &nbsp;&nbsp;&nbsp;German&nbsp;
      <input
        aria-label="German"
        type="checkbox"
        checked={props.germanOnly}
        onChange={setGerman}
      ></input>
    </label>
    <label>
    &nbsp;&nbsp;&nbsp;Dutch&nbsp;
      <input
        aria-label="Dutch"
        type="checkbox"
        checked={props.dutchOnly}
        onChange={setDutch}
      ></input>
    </label>
    <label>
    &nbsp;&nbsp;&nbsp;Italian&nbsp;
      <input
        aria-label="Italian"
        type="checkbox"
        checked={props.italianOnly}
        onChange={setItalian}
      ></input>
    </label>
  </div>
  )
}

export default LearnLanguageFilter;
