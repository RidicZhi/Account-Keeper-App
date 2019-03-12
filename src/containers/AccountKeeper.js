import React from "react";
import RecordsList from "../components/RecordList";
import CreateRecordBtn from "../components/CreateRecordBtn";
import ViewTab from "../components/ViewTab";
import { LIST_VIEW, CHART_VIEW } from '../utility';
import AccountSummary from '../components/AccountSummary';
import MonthPicker from "../components/MonthPicker";

const records = [
  {
    id: 1,
    title: "buy MacbookPro",
    date: "2018-09-10",
    price: "3000",
    category: {
      id: 1,
      name: "shopping",
      type: "outcome",
      iconName: "ios-basket"
    }
  },
  {
    id: 2,
    title: "travelling to Sydney",
    date: "2018-09-12",
    price: "1000",
    category: {
      id: 1,
      name: "travelling",
      type: "outcome",
      iconName: "ios-plane"
    }
  },
  {
    id: 3,
    title: "monthly wages",
    date: "2018-09-12",
    price: "3000",
    category: {
      id: 1,
      name: "salary",
      type: "income",
      iconName: "ios-card"
    }
  }
];

export default class AccountKeeper extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="App-header">
          <div className="row my-4">
            <div className="col text-center">
              <MonthPicker 
                year={2008}
                month={6}
                onChange={(year,month) => {console.log(year + "  " + month)}}
              />
            </div>
            <div className="col text-center mt-4">
              <AccountSummary 
                income={3000}
                outcome={4000}
              />
            </div>
          </div>
        </header>
        <div className="content-area py-2 px-5">
          <ViewTab 
            activeTab={LIST_VIEW}
            onTabChange={(viewMode) => {console.log(viewMode)}}
          />
          <CreateRecordBtn />
          <RecordsList
            records={records}
            onUpdateRecord={record => {
              alert(record.id);
            }}
            onDeleteRecord={record => {
              alert(record.id);
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}
