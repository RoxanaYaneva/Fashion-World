import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { notify } from 'react-notify-toast';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import sendRequest from "./Request.js";
import { grey } from '@material-ui/core/colors';
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

    modal : {
        width: '400px',
        height: '300px',
        margin: `auto auto`,
        'background-color': 'white',
        boxShadow: grey,
        padding: 5,
        outline: 'none',
    },
    
};

class Cart extends Component {
    constructor() {
        super();
        this.state = { 
            counts: {},
            show: false,
            showError: false,
            creditCard: '',
            expirationDate: '',
        };
    }

    handleModalInput = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
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

    showModal = () => {
        this.setState({ show: true });
    };
    hideModal = () => {
        this.setState({ show: false });
    };

    order = (event) => {
        event.preventDefault();
        if (!this.validateCardDate(this.state.creditCard) || !this.validateCardDate(this.state.expirationDate)) {
            this.setState({ showError: true });
        } else {
            this.setState({ showError: false });
            this.orderProducts();
            this.setState({ show: false });
        }
    };


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
                {/* <div className={this.state.show ? "modal display-block" : "modal display-none"}>
                   <section className="modal-main">
                       <form style={styles.form} onSubmit={this.order}>
                           Номер на карта: <input style={styles.input} maxlength="16" className="no" type="text" name="creditCard" value={this.state.creditCard}
                               onChange={this.handleSelectionChange} required></input><br />
                           Валидна до: dd/MM/yyyy <input style={styles.input} className="no" type="text" name="validThru" value={this.state.validThru}
                               onChange={this.handleSelectionChange} required></input><br />
                           <p className={this.state.showError ? "display-block red" : "display-none red"}>Картата ви не е валидна!</p>
                           <input style={styles.submit} className="submit" type="submit" value="Завърши поръчка" />
                       </form>

                   </section>

               </div> */}

                <Dialog open={this.state.show} onClose={this.hideModal}>
                    <div style={styles.modal}>
                        <Typography variant="h6" id="modal-title">Завърши поръчката</Typography>
                        <Typography>
                        <form className="center" onSubmit={this.handleSubmit}>
                        <FormGroup controlId="creditCardNumber">
                            <TextField
                                id="creditCard"
                                label="Кредитна карта"
                                value={this.state.creditCard}
                                onChange={this.handleModalInput}
                                margin="normal"
                            />
                        </FormGroup>
                        <FormGroup controlId="expirationDate">
                            <TextField
                                id="date"
                                label="Expiration date"
                                type="date"
                                defaultValue="2017-05-24"
                                onChange={this.handleModalInput}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />  
                        </FormGroup>
                        </form>
                        </Typography>
                        <br/>
                        <Typography>
                            <Button onClick={() => this.order}
                            variant="contained" color="primary" size="large">
                                Купи
                            </Button>
                        </Typography>
                    </div>
                </Dialog>

                <Grid container spacing={0} direction="column"
                alignItems="center"
                style={{ minHeight: '100vh' }}
                >
                {this.props.products.length > 0 &&

                <Button onClick={() => this.showModal()} variant="contained" color="secondary" size="large">
                   Поръчай
                </Button> 
                }
                {this.props.products.length === 0 &&
                    <Grid item>
                        <h1>Вашата количка е празна</h1>
                        <Link to="/">
                            <Button variant="contained" color="secondary" size="large">
                            Разгледайте нашите продукти
                            </Button>
                        </Link>
                    </Grid>
                }
                </Grid> 
            </div>
        );
    }



    validateCardNumber = (number) => {
        var regex = new RegExp("^[0-9]{16}$");
        if (!regex.test(number))
            return false;

        var sum = 0;
        for (var i = 0; i < number.length; i++) {
            var intVal = parseInt(number.substr(i, 1));
            if (i % 2 === 0) {
                intVal *= 2;
                if (intVal > 9) {
                    intVal = 1 + (intVal % 10);
                }
            }
            sum += intVal;
        }
        return (sum % 10) == 0;
    }

    validateCardDate = (date) => {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        today = dd + '/' + mm + '/' + yyyy;
        if (date > today) {
        return true;
        } return false;
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