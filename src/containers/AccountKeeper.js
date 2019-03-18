import React from "react";
import RecordsList from "../components/RecordList";
import CreateRecordBtn from "../components/CreateRecordBtn";
import ViewTab from "../components/ViewTab";
import { LIST_VIEW, CHART_VIEW, INCOME, parseToYearAndMonth } from "../utility";
import AccountSummary from "../components/AccountSummary";
import MonthPicker from "../components/MonthPicker";

const categories = {
  1: {
    id: 1,
    name: "shopping",
    type: "outcome",
    iconName: "ios-basket"
  },
  2: {
    id: 2,
    name: "travelling",
    type: "outcome",
    iconName: "ios-plane"
  },
  3: {
    id: 3,
    name: "salary",
    type: "income",
    iconName: "ios-card"
  }
};
const records = [
  {
    id: 1,
    title: "buy MacbookPro",
    date: "2018-09-10",
    price: 3000,
    cid: 1
  },
  {
    id: 2,
    title: "travelling to Sydney",
    date: "2018-09-12",
    price: 1000,
    cid: 2
  },
  {
    id: 3,
    title: "monthly wages",
    date: "2018-09-12",
    price: 3000,
    cid: 3
  }
];

export default class AccountKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      records,
      currentDate: parseToYearAndMonth(),
      tabView: LIST_VIEW
    };
  }

  render() {
    const { records, currentDate, tabView } = this.state;

    const recordsWithCategory = records.map(record => {
      record.category = categories[record.cid];
      return record;
    });

    let totalIncome = 0,
      totalOutcome = 0;
    recordsWithCategory.forEach(item => {
      if (item.category.type === INCOME) {
        totalIncome += item.price;
      } else {
        totalOutcome += item.price;
      }
    });

    return (
      <React.Fragment>
        <header>
          <div className="row justify-content-center">
            <h2>Keep Account</h2>
          </div>
          <div className="row my-4">
            <div className="col text-center">
              <MonthPicker
                year={currentDate.year}
                month={currentDate.month}
                onDateChange={this.onDateChange}
              />
            </div>
            <div className="col text-center mt-2">
              <AccountSummary income={totalIncome} outcome={totalOutcome} />
            </div>
          </div>
        </header>
        <div className="content-area py-2 px-5">
          <ViewTab activeTab={tabView} onViewChange={this.onViewChange} />
          <CreateRecordBtn 
            onCreateRecord={this.onCreateRecord}
          />
          <RecordsList
            records={recordsWithCategory}
            onUpdateRecord={this.onUpdateRecord}
            onDeleteRecord={this.onDeleteRecord}
          />
        </div>
      </React.Fragment>
    );
  }

  onViewChange(viewMode) {
    console.log(viewMode);
  }

  onDateChange(year, month) {
    console.log(year + "  " + month);
  }

  onUpdateRecord(record) {
    alert(record.id);
  }

  onDeleteRecord(record) {
    alert(record.id);
  }

  onCreateRecord() {
    console.log("create btn")
  }
}
