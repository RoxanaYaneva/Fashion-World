import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
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

                <div class="row">
                    {this.state.products.map( product =>
                        <Card raised>
                            <CardContent>
                                <h1 color='dark-blue' size='30' gutterBottom>
                                    {product.product_name}
                                </h1>
                                <img src={"/images/products/" + product.image} alt="dresses"/>
                                <h2> Price: {product.product_price}</h2>
                            </CardContent>
        
                            <CardActions>
                                <Link to={`/product/${this.sex}/${product.product_id}`} >
                                    <Button variant="contained" color="secondary" size="large">
                                        Разгледай
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    )} 
                </div>
                
            </div>
        );
    }
}

export default Catalogue;