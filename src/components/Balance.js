import {Component} from "react";
import React from "react";

class Balance extends Component {
    render() {
        const { balance } = this.props;
        return (
            <h1>Баланс: {balance}</h1>
        );
    }
}

export default Balance;
