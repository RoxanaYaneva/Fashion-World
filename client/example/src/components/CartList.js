import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductInCart from './ProductInCart'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class CartList extends Component {

    constructor() {
        super();
        this.state = {
            products: [],
            onButtonClick: null,
            countsInCart: {},
        };
    }
    componentDidMount() {
        this.state.products = this.props.match.params.products;
        for (let i = 0; i <= this.state.products.length; i+= 1){
            this.state.countsInCart[this.state.products[i].product_name] = 0;
        }
        this.state.onButtonClick = this.props.match.params.onButtonClick;
        
    }
    handleChange(event) {
        this.state.countsInCart[event.target.name] = event.target.value;
    }

    render () {
        return (
            <ul>
                {this.state.products.map((pr, index) => (
                <div>
                    <ProductInCart key={index} {...pr} onButtonClick={() => this.state.onButtonClick(index)} />
                    <FormControl>
                        <InputLabel htmlFor="age-native-helper">Count</InputLabel>
                        <Select
                        value={this.state.countsInCart[pr.product_name]}
                        onChange={this.handleChange}
                        input={<Input name={pr.product_name} id="age-native-helper" />}
                        >
                        <option value="" />
                        {pr.count_available.map((count) => (
                            <option value={count}>{count}</option>
                        ))}                       
                        </Select>
                        <FormHelperText>Choose how many of this product to purchase</FormHelperText>
                    </FormControl>
                </div>
                ))}
            </ul>
        );
    }
}

CartList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  onButtonClick: PropTypes.func.isRequired
}

export default CartList