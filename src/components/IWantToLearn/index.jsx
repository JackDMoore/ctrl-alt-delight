import React from "react";
import PropTypes from "prop-types";

const IWantToLearn = ({ languages }) => {
  return (
    <div className="language-list">
      {languages.map((language) => (
        <div className="language-item" key={language.name}>
          <img src={language.flag} alt={language.name} className="flag-icon" />
          <span className="language-name">{language.name}</span>
        </div>
      ))}
    </div>
  );
};

IWantToLearn.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      flag: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default IWantToLearn;
