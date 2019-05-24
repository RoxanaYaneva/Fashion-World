import React, { Component } from 'react';
import sendRequest from "./Request.js";
import "./Main.css";

const cardStyle = {
    width: '18rem',
};

const containerStyle = {
    padding: '250px 40px 200px 20px',
}

class Catalogue extends Component {
    constructor() {
        super();
        this.state = {products: []};
    }

    componentDidMount() {
        this.sex = this.props.match.params.sex;
        this.category = this.props.match.params.category;
        const url = this.category ? `products/category/${this.category}/${this.sex}` :
                    `products/sex/${this.sex}`;
        sendRequest(url, 'GET', {}, (response) => {
            this.setState({products: response});
        });
    }
    
    render() {
        return (
            <div className="main">
                <h2> Fech data for {this.sex} - {this.category} </h2>

                <div class="row" style={containerStyle}>
                    {this.state.products.map( product =>
                        <div class="col-sm-3">
                            <div class="card text-center" style={cardStyle} >
                                <div class="card-header">
                                    {product.product_name}
                                </div>
                                <img class="card-img-top" src={"/images/products/" + product.image} alt="dresses"/>
                                <p>{product.description}</p>
                                <a href={`/product/${this.sex}/${product.product_id}`} class="btn btn-primary">Разгледай</a>
                            </div>
                        </div>
                    )} 
                </div>
                
            </div>
        );
    }
}

export default Catalogue;