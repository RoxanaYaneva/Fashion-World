import React, { Component } from 'react';
import sendRequest from "./Request.js";
import "./Main.css";

class Catalogue extends Component {
    constructor() {
        super();
        this.state = {products: []};
    }

    componentDidMount() {
        this.sex = this.props.match.params.sex;
        this.category = this.props.match.params.category;
        sendRequest(`products?sex=${this.sex}`, 'GET', {}, (response) => {
            this.setState({products: response});
        });
    }
    
    render() {
        const items = this.state.products.map((item, key) =>
        <li key={item.id}>{item}</li>
        );

        return (
            <div className="main">
                <h2>TO DO: Fetch data for {this.sex} - {this.category} </h2>
                <ul>{items}</ul>
            </div>
        );
    }
}

export default Catalogue;