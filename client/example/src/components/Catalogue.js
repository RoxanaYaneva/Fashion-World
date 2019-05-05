import React, { Component } from 'react';
import "./Main.css";

class Catalogue extends Component {

    render() {
        const sex = this.props.match.params.sex;
        const category = this.props.match.params.category;

        return (
            <div className="main">
                <h2>TO DO: Fetch data for {sex} - {category} </h2>
            </div>
        );
    }
}

export default Catalogue;