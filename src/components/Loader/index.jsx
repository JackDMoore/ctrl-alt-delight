import { Spinner } from "react-bootstrap";
import "../../styles.css";

const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: "100px",
        height: "100px",
        margin: "auto",
        display: "block",
      }}
    ></Spinner>
  );
};

export default Loader;

// import React from "react";
// import { Spinner } from "react-bootstrap";
// import "./loader.css";

// const Loader = () => {
//   return <Spinner animation="border" role="status" className="loader" />;
// };

// export default Loader;
