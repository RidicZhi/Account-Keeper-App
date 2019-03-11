import React from "react";
import RecordsList from "../components/RecordList";
import ViewTab from "../components/ViewTab";
import { LIST_VIEW, CHART_VIEW } from '../utility';
import AccountSummary from '../components/AccountSummary';

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
      <div className="App">
        <header className="App-header" />
        <AccountSummary 
          income={3000}
          outcome={4000}
        />
        <ViewTab 
          activeTab={LIST_VIEW}
          onTabChange={(viewMode) => {console.log(viewMode)}}
        />
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
    );
  }
}
