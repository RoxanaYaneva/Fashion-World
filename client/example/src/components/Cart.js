import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux';
import { decreaseProductCountInCart } from '../store/actions';
import "./Main.css";


class Cart extends Component {
    handleChange = (event) => {
        this.props.products.find(pr => pr.name === event.target.name).count = event.target.value;
    }

    render() {
        return (
            <div className="main">
                
                <h1>Products In Cart </h1>
                <ul>
                    {this.props.products.map( product =>
                        <li>
                            <h1 color='dark-blue' size='30'>
                                {product.product_name}
                            </h1>
                            <img src={"/images/products/" + product.image} alt="dresses"/>
                            <h2> Price: {product.product_price}</h2>

                        
                            <FormControl>
                                <InputLabel htmlFor="age-native-helper">Count</InputLabel>
                                <Select
                                value={product.count}
                                onChange={this.handleChange}
                                input={<Input name={product.product_name} id="age-native-helper" />}
                                >
                                <option value="" />
                                {[...Array(product.count_available).keys()].map((count) => (
                                    <option value={count}>{count}</option>
                                ))}                       
                                </Select>
                                <FormHelperText>Choose how many of this product to purchase</FormHelperText>
                            </FormControl>
                        </li>
                    )} 
                </ul> 
                {this.props.products.length === 0 &&
                    <div>
                        <h1 class="center">Вашата количка е празна</h1>
                        <a href="/" class="btn btn-primary">Разгледайте нашите продукти</a>
                    </div>
                }
                    
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        products: state.products,
    }
}

export default connect(mapStateToProps)(Cart) ;

const mapDispatchToProps = dispatch => {
  return {
    onButtonClick: (id, count) => {
      dispatch(decreaseProductCountInCart(id, count))
    }
  }
}


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