import React, { Component } from 'react';
import { notify } from 'react-notify-toast';
import Card from '@material-ui/core/Card';
import TableCell from '@material-ui/core/TableCell';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import sendRequest from "./Request.js";
import { connect } from 'react-redux';
import "./Main.css";
import { StylesContext } from '@material-ui/styles/StylesProvider';

const styles = {
    comments : {
        margin: '20px 20px',
    },
    textarea : {
        width : '800px',
        height : '100px',
    },
    box : {
        padding : '10px',
        borderBottom: '1px solid black',
        margin : '0',
    },
    name : {
        fontWeight : 'bold',
        padding : '0 10px',
        background : '#FFAAAA',
        margin : '20px 0 0 0',
    }, 
    submit : {
        background : '#FFAAAA',
        fontWeight : 'bold',
        border : '1px solid black',
    }, 
    commentSec : {
        margin: '0',
    },
}

class Product extends Component {
    constructor() {
        super();
        this.state = { product: {} , comments : [] , text: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    componentDidMount() {
        this.sex = this.props.match.params.sex;
        this.id = this.props.match.params.id;
        const url =`products/id/${this.id}`;
        sendRequest(url, 'GET', {}, (response) => {
            this.setState({product: response});
        });
        const url2 = `products/id/${this.id}/comments`;
        sendRequest(url2, 'GET', {}, (response) => {
            this.setState({comments: response});
            console.log(this.state.comments);
        });
    }

    handleSubmit = (event) => {
        const url = `products/id/${this.id}/comments`;
        sendRequest(url, 'POST', {user: this.props.userId, productId : this.props.match.params.id, text : this.state.text}, (response) => {
            notify.show('Коментарът Ви беше добавен успешно!', 'success', 1500);
            this.forceUpdate();
        });
    }

    handleClick = () =>  {
        if (this.props.userId) {
            this.props.addProductToCart(this.state.product);
            notify.show('Продуктът беше добавен в количката Ви!','success', 2000,);
            this.props.history.push('/cart');
        } else {
            notify.show('Моля първо влезте в своя профил!','error', 2000);
        }
        
    }

    render() {
        console.log(this.props);
        return (
            <div className="main">
                <Card>
                    <CardContent>
                        <TableCell align="left">
                        <h1 color='dark-blue' size='30'>
                            {this.state.product.product_name}
                        </h1>
                        <img src={"/images/products/" + this.state.product.image} alt="dresses"/>
                        </TableCell>
                        <TableCell padding="40px">
                            <h2>
                                Описание: {this.state.product.description}
                            </h2>
                            <h2>Пол: {this.state.product.sex}</h2>
                            <h2>Налични бройки: {this.state.product.count_available}</h2>
                            <h2> Цена: {this.state.product.product_price}</h2>
                            <CardActions>
                                <Button onClick={this.handleClick} variant="contained" color="secondary" size="large">
                                    Добави в количката
                                    <img src={"/images/cart.png"} alt="shopping_cart" />
                                </Button>
                    </CardActions>
                        </TableCell>
                    </CardContent>
                </Card>
                <div style={styles.comments}>
                    {this.props.userId &&
                        <div>
                        <p>Comment: </p>
                        <textarea name="text" onChange={this.handleInputChange} style={styles.textarea} value={this.state.text}></textarea>
                        <p>
                            <input style={styles.submit} type="submit" onClick={this.handleSubmit} name="submit" value="Submit" />
                        </p>
                        </div>
                    }
                    <div style={styles.commentSec}>{
                        this.state.comments.map(comment => (
                         <div>
                           <p style={styles.name}>{comment.username} {comment.date_posted}</p>
                           <p style={styles.box}>{comment.text}</p>
                        </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        userId: state.userId,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProductToCart: (product) => {
            dispatch({type: 'ADD_PRODUCT_TO_CART', product })
        } 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);

