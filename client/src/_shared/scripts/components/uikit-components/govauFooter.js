import React, { PropTypes } from 'react';


const GovauFooter = () => {
  return (
    <footer className="govau-footer">
      <div className="container">
        <div className="govau-footer__container">

          <div className="govau-footer__container__logo">
            <img src={require("./../../../images/coat-of-arms.png")} width="185" height="135" alt="Commonwealth of Australia Coat of Arms Logo" />
          </div>

          <div className="govau-footer__container__utils">
            <span className="line-1">
              <a href="mailto:performancedashboard@digital.gov.au" rel="external" className="UIK-button btn btn-primary report-an-issue">Report an issue</a></span>
            <span className="line-2">
              <small>© Commonwealth of Australia</small>
              <a href="https://creativecommons.org/licenses/by/3.0/au/deed.en" className="UIK-link small" rel="external">This work is licensed under a Creative Commons Attribution 3.0 International License</a>
            </span>
          </div>

        </div>
      </div>
    </footer>
  )
};

export default GovauFooter;

