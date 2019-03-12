import React from "react";
import PropTypes from 'prop-types';

const AccountSummary = ({ 
  income,
  outcome,
}) => {
  return (
    <div className="container">
      <div className="row justify-content-center font-weight-bold" style={{ fontSize: "1.2rem" }}>
        <div className="col-4">
          Income: ${income}
        </div>
        <div className="col-4">
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
