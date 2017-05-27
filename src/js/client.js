import React, { Component } from "react";
import ReactDOM from "react-dom";

class Layout extends Component {

    constructor(){
        super()
        this.name = 'Will'
    }

    getVal(val) {
        return 'w00f' + val
    }

    render() {
        const name = 'Cris'
        return (
            <h1>it's {this.getVal('son')} - {name} - {this.name} </h1>
        )
    }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)