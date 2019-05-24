import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import sendRequest from "./Request.js";
import "./Main.css";

class Product extends Component {
    constructor() {
        super();
        this.state = { product: {} };
    }

    componentDidMount() {
        this.sex = this.props.match.params.sex;
        this.id = this.props.match.params.id;
        const url =`products/id/${this.id}/${this.sex}`;
        sendRequest(url, 'GET', {}, (response) => {
            this.setState({product: response});
        });
    }

    render() {
        return (
            <div className="main">
                <Card>
                    <CardContent>
                        <h1 color='dark-blue' size='30' gutterBottom>
                            {this.state.product.product_name}
                        </h1>
                        <img src={"/images/products/" + this.state.product.image} alt="dresses"/>
                        <h2> Price: {this.state.product.product_price}</h2>
                    </CardContent>

                    <CardActions>
                        <Button variant="contained" color="secondary" size="large">
                            Add to cart
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
};
export default Product;

