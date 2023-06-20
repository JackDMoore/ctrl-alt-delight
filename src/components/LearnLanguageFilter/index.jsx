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
      English
      <input
        type="checkbox"
        checked={props.englishOnly}
        onChange={setEnglish}
      ></input>
    </label>
    <label>
      French
      <input
        type="checkbox"
        checked={props.frenchOnly}
        onChange={setFrench}
      ></input>
    </label>
    <label>
      German
      <input
        type="checkbox"
        checked={props.germanOnly}
        onChange={setGerman}
      ></input>
    </label>
    <label>
      Dutch
      <input
        type="checkbox"
        checked={props.dutchOnly}
        onChange={setDutch}
      ></input>
    </label>
    <label>
      Italian
      <input
        type="checkbox"
        checked={props.italianOnly}
        onChange={setItalian}
      ></input>
    </label>
  </div>
  )
}

export default LearnLanguageFilter;