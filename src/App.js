import React, { Component } from 'react';
import logo from './index.png';
import './App.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPlus from "./components/TabPlus";
import TabMinus from "./components/TabMinus";
import Balance from "./components/Balance";
import {uniqueId} from "lodash";

class App extends Component {
  state = { value: "one" ,
      transactionsPlus: [],
      transactionsMinus: [],
    categoriesPlus: [
        {
            id: uniqueId(),
            name: "Зарплата",
        },
        {
            id: uniqueId(),
            name: "Подарок",
        }
        ],
      categoriesMinus: [
          {
              id: uniqueId(),
              name: "Проезд",
          },
          {
              id: uniqueId(),
              name: "Еда",
          }
      ],
      categoryName: " ",
      balance: 0,
      amount: "",
      transactionName: "",
  };

  handleChangeTab = (event, value) => {
    this.setState({ value });
  };

    handleChangeCategory = ({ target: { value } }) => {
        this.setState({ categoryName: value})
    };

    handleAddCategoryPlus = (e) => {
        e.preventDefault();
        const { categoriesPlus, categoryName } = this.state;
        const newCategory = { id: uniqueId(), name: categoryName };
        this.setState({ categoryName: '', categoriesPlus: [newCategory, ...categoriesPlus] });
    };

    handleChangeAmount = ({ target: { value } }) => {
        this.setState({ amount: value });
    };

    handleChangeTransactionName = ({ target: { value } }) => {
        this.setState({ transactionName: value });
    };

    handleChangeBalancePlus = () => {
        const { amount, balance } = this.state;
        this.setState({ balance: Number(amount) + balance});
    };

    handleChangeBalanceMinus = () => {
        const { amount, balance } = this.state;
        this.setState({ balance: balance - amount});
    };

    handleAddTransactionPlus = (e) => {
        e.preventDefault();
        const { transactionsPlus, amount, transactionName } = this.state;
        const newTransaction = { id: uniqueId(), value: Number(amount), category: transactionName };
        this.setState({ amount: "", transactionsPlus: [newTransaction, ...transactionsPlus], transactionName: "" });
    };

    handleAddTransactionMinus = (e) => {
        e.preventDefault();
        const { transactionsMinus, amount, transactionName } = this.state;
        const newTransaction = { id: uniqueId(), value: Number(amount), category: transactionName };
        this.setState({ amount: "", transactionsMinus: [newTransaction, ...transactionsMinus], transactionName: "" });
    };

    handleAddCategoryMinus = (e) => {
        e.preventDefault();
        const { categoriesMinus, categoryName } = this.state;
        const newCategory = { id: uniqueId(), name: categoryName };
        this.setState({ categoryName: '', categoriesMinus: [newCategory, ...categoriesMinus] });
    };

  render() {
    const { value, categoriesPlus, categoryName, categoriesMinus, transactionsMinus, balance, transactionsPlus, amount, transactionName } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Управление бюджетом
          </p>
        </header>
        <Balance balance={balance} />
        <Tabs indicatorColor="primary" value={value} onChange={this.handleChangeTab} centered>
          <Tab value="one" label="доходы" />
          <Tab value="two" label="расходы" />
        </Tabs>
        {value === "one" && <TabPlus
            transactions={transactionsPlus}
            categoriesPlus={categoriesPlus}
            addCategory={this.handleAddCategoryPlus}
            name={categoryName}
            changeCategory={this.handleChangeCategory}
            addTransaction={this.handleAddTransactionPlus}
            changeAmount={this.handleChangeAmount}
            amount={amount}
            transactionName={transactionName}
            changeTransactionName={this.handleChangeTransactionName}
            changeBalance={this.handleChangeBalancePlus}
        />}
        {value === "two" && <TabMinus
            transactions={transactionsMinus}
            categoriesMinus={categoriesMinus}
            addCategory={this.handleAddCategoryMinus}
            name={categoryName}
            changeCategory={this.handleChangeCategory}
            addTransaction={this.handleAddTransactionMinus}
            changeAmount={this.handleChangeAmount}
            amount={amount}
            transactionName={transactionName}
            changeTransactionName={this.handleChangeTransactionName}
            changeBalance={this.handleChangeBalanceMinus}
        />}
      </div>
    );
  }
}

export default App;
