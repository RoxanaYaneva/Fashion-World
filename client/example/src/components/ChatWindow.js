import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import "./ChatWindow.css"
import sendRequest from "./Request.js";
import { notify } from 'react-notify-toast';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = {
    form : {
        position : 'fixed',
        right: '2px',
    }, 
    textarea : {
        width: '100%',
        padding: '15px',
        margin: '5px 0 22px 0',
        border: 'none',
        background: '#f1f1f1',
        resize: 'none',
        minHeight: '200px',
    }
}

class ChatWindow extends Component {

    state = {
        open: false,
    }   

    openChat = () => {
        this.setState({open:true});
    }

    closeChat = () => {
        this.setState({open:false});
    }

    render() {
        return (
            <div>
                {!this.state.open &&
                <button onClick={this.openChat} className="open-button">Chat</button>
                }
                {this.state.open &&
                <div>
                    <form style={styles.form} className="form-container">
                    <h1>Chat</h1>

                    <label for="msg"><b>Message</b></label>
                    <TextField style={styles.textarea} placeholder="Type message.." name="msg" required></TextField>
                    <Button type="submit" className="btn">Send</Button>
                    <Button onClick={this.closeChat} className="btn cancel">Close</Button>
                    </form>
                </div>
                }
            </div>
        );
    }
}

export default ChatWindow
