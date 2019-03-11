import React from "react";
import PropTypes from "prop-types";
import { padLeft, range } from "../utility";

export default class MonthPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDropdownOpen: false,
      selectedYear: props.year,
      selectedMonth: props.month
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.selectYear = this.selectYear.bind(this);
    this.selectMonth = this.selectMonth.bind(this);
  }

  toggleDropdown(e) {
    e.preventDefault();
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    });
  }

  selectYear(e, yearNum) {
    e.preventDefault();
    this.setState({
      selectedYear: yearNum
    });
  }

  selectMonth(e, monthNum) {
    e.preventDefault();
    this.setState({
      isDropdownOpen: false,
      selectedMonth: monthNum
    });
    this.props.onChange(this.state.selectedYear, monthNum);
  }

  render() {
    const { year, month } = this.props;
    const { isDropdownOpen, selectedYear, selectedMonth } = this.state;

    const monthRange = range(12, 1);
    const yearRange = range(9, -4).map(num => num + year);

    return (
      <div className="dropdown">
        <h4>Select Month</h4>
        <button
          className="btn btn-lg btn-secondary dropdown-toggle"
          onClick={this.toggleDropdown}
        >
          {selectedYear} / {padLeft(selectedMonth)}
        </button>
        {isDropdownOpen && (
          <div 
            className="dropdown-menu" 
            style={{ display: "block" , padding:"5px 15px 10px 15px"}}
          >
            <h6 className="dropdown-header" style={{ textAlign:"center"}}>Select Month</h6>
            <div className="row">
              <div className="col border-right">
                {yearRange.map((yearNum, index) => (
                  <a
                    key={index}
                    href="#"
                    className={
                      yearNum === selectedYear
                        ? "dropdown-item active"
                        : "dropdown-item"
                    }
                    onClick={e => this.selectYear(e, yearNum)}
                  >
                    {yearNum}
                  </a>
                ))}
              </div>
              <div className="col">
                {monthRange.map((monthNum, index) => (
                  <a
                    key={index}
                    href="#"
                    className={
                      monthNum === selectedMonth
                        ? "dropdown-item active"
                        : "dropdown-item"
                    }
                    onClick={e => this.selectMonth(e, monthNum)}
                  >
                    {padLeft(monthNum)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

MonthPicker.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}
