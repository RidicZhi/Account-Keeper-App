import React from "react";
import PropTypes from "prop-types";
import { padLeft, range } from "../utility";

export default class MonthPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDropdownDisplay: false,
      selectedYear: props.year,
      selectedMonth: props.month
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.selectYear = this.selectYear.bind(this);
    this.selectMonth = this.selectMonth.bind(this);
    // this.hideDropdownMenuByClickOtherArea = this.hideDropdownMenuByClickOtherArea.bind(
    //   this
    // );
  }

  toggleDropdown(e) {
    e.preventDefault();
    this.setState({
      isDropdownDisplay: !this.state.isDropdownDisplay
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
      isDropdownDisplay: false,
      selectedMonth: monthNum
    });
    this.props.onChangDate(this.state.selectedYear, monthNum);
  }

  // hideDropdownMenuByClickOtherArea(e) {
  //   if (e.target.className.indexOf("notToggleZone") != -1) {
  //     return;
  //   }
  //   this.setState({
  //     isDropdownDisplay: false
  //   });
  // }

  // componentDidMount() {
  //   document.addEventListener("click", this.hideDropdownMenuByClickOtherArea);
  // }

  render() {
    const { year, month } = this.props;
    const { isDropdownDisplay, selectedYear, selectedMonth } = this.state;

    const monthRange = range(12, 1);
    const yearRange = range(9, -4).map(num => num + year);

    return (
      <div className="dropdown">
        <h4>Select Month</h4>
        <button
          className="btn btn-lg btn-light dropdown-toggle notToggleZone"
          onClick={this.toggleDropdown}
        >
          {selectedYear} / {padLeft(selectedMonth)}
        </button>
        {isDropdownDisplay && (
          <div
            className="dropdown-menu notToggleZone"
            style={{ display: "block", padding: "5px 15px 10px 15px" }}
          >
            <h6
              className="dropdown-header notToggleZone"
              style={{ textAlign: "center" }}
            >
              Select Month
            </h6>
            <div className="row notToggleZone">
              <div className="col border-right notToggleZone">
                {yearRange.map((yearNum, index) => (
                  <a
                    key={index}
                    href="#"
                    className={
                      yearNum === selectedYear
                        ? "dropdown-item active notToggleZone"
                        : "dropdown-item notToggleZone"
                    }
                    onClick={e => this.selectYear(e, yearNum)}
                  >
                    {yearNum}
                  </a>
                ))}
              </div>
              <div className="col notToggleZone">
                {monthRange.map((monthNum, index) => (
                  <a
                    key={index}
                    href="#"
                    className={
                      monthNum === selectedMonth
                        ? "dropdown-item active notToggleZone"
                        : "dropdown-item notToggleZone"
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
  onChangDate: PropTypes.func.isRequired
};
