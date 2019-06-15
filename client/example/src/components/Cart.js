import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { notify } from 'react-notify-toast';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import sendRequest from "./Request.js";
import "./Main.css";

const range = (n, A = []) => (n === 1) ? [n, ...A] : range(n - 1, [n, ...A]);
const styles = {
    ul : {
        'list-style-type': 'none',
    },
    card: {
        'margin-bottom': '10px',
    },
    image: {
        height: '200px',
    },
    details: {
      height: '270px',
      float: 'left',
      'padding-left': '30px',
      margin: 'auto auto',
    },
};

class Cart extends Component {
    constructor() {
        super();
        this.state = { counts: {} };
    }

    handleSelectionChange = (event) => {
        const newCounts = {
            ...this.state.counts,
            [event.target.name] : event.target.value,
        };
        this.setState({ counts: newCounts });
    }

    orderProducts = () => {
        const url =`order`;
        const productsToOrder = this.props.products
            .map(pr => ({...pr, quantity: this.state.counts[pr.product_name] }));
        sendRequest(url, 'PUT', { products: productsToOrder }, (response) => {
            this.props.products.forEach(pr => this.props.removeProductFromCart(pr.product_id));
            this.forceUpdate();
            notify.show(response, 'success', 1500);
        });
    }

    removeProductFromCart = (product) => {
        this.props.removeProductFromCart(product.product_id);
        this.forceUpdate();
        notify.show(`Продуктът ${product.product_name} беше премахнат от количката Ви!`,'success', 2000,);
    }

    componentWillMount() {
        let newCounts = {};
        this.props.products.forEach(pr => {
            newCounts[pr.product_name] = 1;
        });
        this.setState({ counts: newCounts });
    }

    render() {
        return (
            <div className="main">
                <ul style={styles.ul}>
                    {this.props.products.map( product =>
                        <li>
                        <Card style={styles.card}>
                            <div style={styles.details}>
                                <h1 color='dark-blue' size='30'>
                                    {product.product_name}
                                </h1>
                                <img style={styles.image} src={"/images/products/" + product.image} alt="dresses"/>
                            </div>
                            <div style={styles.details}>
                                <h2> Price: {product.product_price}</h2>
                                <FormControl >
                                    <InputLabel htmlFor="age-native-helper">Count</InputLabel>
                                    <Select
                                    value={this.state.counts[product.product_name]}
                                    onChange={this.handleSelectionChange}
                                    input={<Input name={product.product_name} id="age-native-helper" />}
                                    >
                                    {range(product.count_available).map((count) => (
                                        <MenuItem value={count}>{count}</MenuItem>
                                    ))}
                                    </Select>
                                    <FormHelperText>Choose how many of this product to purchase</FormHelperText>
                                </FormControl>

                            </div>
                            <Button onClick={() => this.removeProductFromCart(product)}
                            variant="contained" color="secondary" size="large">
                                Премахни от количката
                            </Button>
                        </Card>
                        </li>
                    )} 
                </ul> 
                <Grid container spacing={0} direction="column"
                alignItems="center"
                style={{ minHeight: '100vh' }}
                >
                {this.props.products.length > 0 &&
                    <Grid item>
                        <Button onClick={() => this.orderProducts()} variant="contained" color="secondary" size="large">
                            Купи
                        </Button>
                    </Grid>   
                }
                {this.props.products.length === 0 &&
                    <Grid item>
                        <h1>Вашата количка е празна</h1>
                        <Link to="/" class="btn btn-primary">Разгледайте нашите продукти</Link>
                    </Grid>
                }
                </Grid> 
                    
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        products: state.products,
    }
}


const mapDispatchToProps = dispatch => {
    return {
        removeProductFromCart: (id) => {
            dispatch({type: 'REMOVE_PRODUCT_FROM_CART', id })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart) ;

// function cartController() {
//     if ((sessionStorage.getItem('cart') != null) && (JSON.parse(sessionStorage.getItem('cart')).length > 0)) {
//         var products = JSON.parse(sessionStorage.getItem('cart'));
//         var total = JSON.parse(sessionStorage.getItem('total'));

//         var cartSource = $('#cartTemplate').html();
//         var cartTemplate = Handlebars.compile(cartSource);

//         var cartHTML = cartTemplate({ item: products });
//         $('main').html(cartHTML);
//         $('#totalCost').text(total);


//         $('input.changeQuantity').on('change', function () {
//             var cartItemId = $(this).closest('tr').attr('id');
//             var newQuantity = $(this).val();
//             cartStorage.changeCartItem(cartItemId, newQuantity);
//             cartController();
//         });


//         $('.deleteItem').on('click', function () {
//             var cartItemId = $(this).closest('tr').attr('id');
//             cartStorage.removeCartItem(cartItemId);
//             cartController();
//         });


//         $('#purchaseBut').on('click', function () {
//             var user = JSON.parse(sessionStorage.getItem('loggedUser'));

//             for (var i = 0; i < products.length; i++) {
//                 var data = { "product_name": products[i].product[0].product_name, "quantity": products[i].quantity }

//                 sendRequest('count', 'GET', data, function showResponse(response) {
                   
//                     if (response[0].count_available > 0) {
//                         user.orders += (response[0].product_name + " ");

//                         sessionStorage.setItem("userOrders", user.orders);
//                         var q = Number(response[0].count_available - response[0].quantity);
                 
//                         var d = { "product_name": response[0].product_name, "quantity": q };
//                         sendRequest('purchase', 'PUT', d, function showResponse(r) {
//                             alert('Вашата поръчка е осъществена успешно!');
//                             cartStorage.emptyCart();

//                             location.replace('#home');
//                         })
//                     } else {
//                         alert("Този продукт е временно изчерпан!");
//                     }
//                 })

//                 //tuk response e undefined
//             }
//         });

//         $('.items').on('click', function () {
//             var title = $(this).closest('tr').children().eq(1).children().eq(0).text();
//             itemController(title);
//         });

//     } else {
//         var emptyCartText = ' <p style="font-size:25px; position:relative; top:160px; left:480px">Вашата количка е празна!</p>\n' +
//             '        <button style="float:right; position:relative; top:130px" onclick="(function(){location.replace(\'#home\')})();">\n' +
//             '            Разгледайте нашите продукти\n' +
//             '        </button>';
    
//         $('main').html(emptyCartText);
//     }
// }