import React from "react";

const CreateRecordBtn = ({ onCreateRecord }) => (
  <button
    type="button"
    className="btn btn-primary btn-lg btn-block"
    onClick={onCreateRecord}
  >
    Create A New Record
  </button>
);

export default CreateRecordBtn;
