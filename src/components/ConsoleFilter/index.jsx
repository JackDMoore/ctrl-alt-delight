import React from "react";

const ConsoleFilter = (props) => {
  function setPC() {
    props.setPCOnly(!props.pcOnly)
  }

  function setPlaystation() {
    props.setPlaystationOnly(!props.playstationOnly)
  }

  function setXbox() {
    props.setXboxOnly(!props.xboxOnly)
  }

  return (
  <div className="language-filters">
    <label>
      PC
      <input
        type="checkbox"
        checked={props.pcOnly}
        onChange={setPC}
      ></input>
    </label>
    <label>
      PlayStation
      <input
        type="checkbox"
        checked={props.playstationOnly}
        onChange={setPlaystation}
      ></input>
    </label>
    <label>
      Xbox
      <input
        type="checkbox"
        checked={props.xboxOnly}
        onChange={setXbox}
      ></input>
    </label>
  </div>
  )
}

export default ConsoleFilter;