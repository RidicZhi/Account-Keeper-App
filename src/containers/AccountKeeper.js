import React from "react";
import RecordsList from "../components/RecordList";
import CreateRecordBtn from "../components/CreateRecordBtn";
import ViewTab from "../components/ViewTab";
import { LIST_VIEW, CHART_VIEW, INCOME, parseToYearAndMonth, padLeft } from "../utility";
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
    date: "2018-10-12",
    price: 1000,
    cid: 2
  },
  {
    id: 3,
    title: "monthly wages",
    date: "2019-03-12",
    price: 3000,
    cid: 3
  }
];

const newRecord = {
  id: 4,
  title: "buy keyboard",
  date: "2019-03-15",
  price: 200,
  cid: 1
};

export default class AccountKeeper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      records,
      currentDate: parseToYearAndMonth(),
      tabView: LIST_VIEW
    };

    this.onChangView = this.onChangView.bind(this);
    this.onCreateRecord = this.onCreateRecord.bind(this);
    this.onDeleteRecord = this.onDeleteRecord.bind(this);
    this.onUpdateRecord = this.onUpdateRecord.bind(this);
    this.onChangDate = this.onChangDate.bind(this);
  }

  render() {
    const { records, currentDate, tabView } = this.state;

    const recordsWithCategory = records.map(record => {
      record.category = categories[record.cid];
      return record;
    }).filter(record => {
      return record.date.includes(`${currentDate.year}-${padLeft(currentDate.month)}`)
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
                onChangDate={this.onChangDate}
              />
            </div>
            <div className="col text-center mt-2">
              <AccountSummary income={totalIncome} outcome={totalOutcome} />
            </div>
          </div>
        </header>
        <div className="content-area py-2 px-5">
          <ViewTab activeTab={tabView} onChangView={this.onChangView} />
          <CreateRecordBtn
            onCreateRecord={() => this.onCreateRecord(newRecord)}
          />
          {tabView === LIST_VIEW && (
            <RecordsList
              records={recordsWithCategory}
              onUpdateRecord={this.onUpdateRecord}
              onDeleteRecord={this.onDeleteRecord}
            />
          )}
          {tabView === CHART_VIEW && <h1>this is chart zone</h1>}
        </div>
      </React.Fragment>
    );
  }

  onChangView(viewMode) {
    this.setState({
      tabView: viewMode
    });
  }

  onChangDate(year, month) {
    console.log(year + "  " + month);
    this.setState({
      currentDate: { year, month }
    });
  }

  onUpdateRecord(updatedRecord) {
    const updatedRecords = this.state.records.map(record => {
      if (record.id === updatedRecord.id) {
        return { ...record, title: "updated title" };
      }
      return record;
    });

    this.setState({
      records: updatedRecords
    });
  }

  onDeleteRecord(deletedRecord) {
    const filteredRecords = this.state.records.filter(
      record => record.id !== deletedRecord.id
    );

    this.setState({
      records: filteredRecords
    });
  }

  onCreateRecord(newRecord) {
    const newRecords = [newRecord, ...this.state.records];

    this.setState({
      records: newRecords
    });
  }
}
