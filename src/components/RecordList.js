import React from "react";
import Ionicon from "react-ionicons";
import PropTypes from 'prop-types';

const RecordsList = ({ 
  records, 
  onUpdateRecord, 
  onDeleteRecord 
}) => {
  return (
    <ul className="list-group list-group-flush">
      {records.map(record => (
        <li
          className="list-group-item d-flex justify-content-between align-items-center text-center"
          key={record.id}
        >
          <span className="col-1">
            <Ionicon
              className="rounded-circle"
              fontSize="35px"
              style={{ backgroundColor: "#007bff", padding: "5px" }}
              color="#fff"
              icon={record.category.iconName}
            />
          </span>
          <span className="col-5">{record.title}</span>
          <span className="col-2 font-weight-bold">
            {record.category.type === "income" ? "+ " : "- "}${record.price}
          </span>
          <span className="col-2">{record.date}</span>
          <a
            className="col-1"
            onClick={() => {
              onUpdateRecord(record);
            }}
          >
            <Ionicon
              className="rounded-circle"
              fontSize="35px"
              style={{ backgroundColor: "#28a745", padding: "5px" }}
              color="#fff"
              icon="ios-create-outline"
            />
          </a>
          <a
            className="col-1"
            onClick={() => {
              onDeleteRecord(record);
            }}
          >
            <Ionicon
              className="rounded-circle"
              fontSize="35px"
              style={{ backgroundColor: "#dc3545", padding: "5px" }}
              color="#fff"
              icon="ios-close"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

RecordsList.defaultProps = {
  records: [],
}

RecordsList.propTypes = {
  records: PropTypes.array.isRequired,
  onUpdateRecord: PropTypes.func.isRequired,
  onDeleteRecord: PropTypes.func.isRequired
}

export default RecordsList;
