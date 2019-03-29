import React, { Component } from 'react';
import TabContainer from "react-bootstrap/TabContainer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

class TabPlus extends Component {
    render() {
        const { transactions, categoriesPlus, addCategory, name, changeCategory, addTransaction, amount, changeAmount, transactionName, changeTransactionName, changeBalance } = this.props;
        return (
        <TabContainer>
            {transactions.map(transaction => (
                <List component="nav" key={transaction.id}>
                    <ListItem button>
                        <ListItemText primary={transaction.category} secondary={transaction.value}/>
                    </ListItem>
                </List>
            ))}
            <form onSubmit={addCategory} className="form-inline mx-3">
                <div className="form-group">
                    <input
                        type="text"
                        onChange={changeCategory}
                        value={name}
                        required
                        className="form-control mr-3"
                        placeholder="Добавьте категорию"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Добавить категорию дохода</button>
            </form>
            <form
                className='Transaction-form'
                onSubmit={addTransaction}
            >
                <input
                    type='number'
                    placeholder='сумма'
                    value={amount}
                    onChange={changeAmount}
                />
                <select
                    value={transactionName}
                    onChange={changeTransactionName}
                >
                    {categoriesPlus.map(category => (
                        <option key={category.id} value={category.name}>
                            {category.name}
                        </option>
                    ))}
                </select>
                <button onClick={changeBalance}>Добавить</button>
            </form>
        </TabContainer>
        )
    }
}

export default TabPlus;
