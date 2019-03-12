import React from "react";
import PropTypes from 'prop-types';

const AccountSummary = ({ 
  income,
  outcome,
}) => {
  return (
    <div className="container mb-2">
      <div className="row justify-content-center mb-2" style={{ fontSize: "1.3rem" }}>
        <div className="col">
          Income: ${income}
        </div>
      </div>
      <div className="row justify-content-center" style={{ fontSize: "1.3rem" }}>
        <div className="col">
          Outcome: ${outcome}
        </div>
      </div>
    </div>
  );
};

AccountSummary.propTypes = {
  income: PropTypes.number.isRequired,
  outcome: PropTypes.number.isRequired
}

export default AccountSummary;
