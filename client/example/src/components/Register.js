import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./Main.css"
import sendRequest from "./Request.js";
import { notify } from 'react-notify-toast';

const styles = {
    form : {
        margin: '10px 650px'
    },
    input : {
        margin: '10px auto'
    },
    login : {
        margin: '20px 650px'
    },
    submit : {
        margin: '10px 60px',
        background: '#FFAAAA',
        fontWeight : 'bold',
        border : '1px solid black'
    },
};

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {username:'', password:''};
    
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

    handleSubmit(event) {
        event.preventDefault();
        const url = 'register';
        sendRequest(url, 'POST', { user : this.state.username , pass: this.state.password  }, (response) => {
            this.props.setUserId(this.state.username);
            notify.show('You registered successfully', 'success', 1500);
            if (response) {
                this.props.history.push('/');
            }
        });
    }

    render() {
        if (this.props.userId) {
            return (
                <div>
                    <h1 style={styles.loginSucc}>You are already logged in!</h1>
                    <h1 style={styles.loginSucc}>You are already logged in!</h1>
                    <h1 style={styles.loginSucc}>You are already logged in!</h1>
                </div>
            );
        } else {
            return (
                <div className="main">
                    <h1 style={styles.login}>Register</h1>
                    <form style={styles.form} onSubmit={this.handleSubmit}>
                    Username: <input style={styles.input} className="no" type="text" name="username" value={this.state.username}
                            onChange={this.handleInputChange} required></input><br/>
                    Password: <input style={styles.input} className="no" type="password" name="password" value={this.state.password}
                            onChange={this.handleInputChange} required></input><br/>
                    Repeat password: <input style={styles.input} className="no" type="password" name="password2" value={this.state.password}
                            onChange={this.handleInputChange} required></input><br/>
                    <input style={styles.submit} className="submit" type="submit" value="Submit" />
                    </form>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.userId,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUserId: (userId) => {
            dispatch({type: 'LOGIN', userId })
        }
    }
}

 export default connect(mapStateToProps, mapDispatchToProps)(Register)

//export default Register