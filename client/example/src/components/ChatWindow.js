import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import socketIOClient from "socket.io-client";
import "./ChatWindow.css"

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
        response: 0,
        chatMsg: '',
        endpoint: "http://localhost:8080/chat",
    }  
    
    componentDidMount() {
        const {endpoint} = this.state;
        const socket = socketIOClient(endpoint);
        //Listen for data on the "outgoing data" namespace and supply a callback for what to do when we get one. In this case, we set a state variable
        socket.on('new_message', data => {
            this.setState({response: data})
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        socketIOClient.emit('new_message', {message : this.state.chatMsg});
    }

    handleMsgChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    openChat = () => {
        this.setState({open:true});
    }

    closeChat = () => {
        this.setState({open:false});
    }

    render() {
        const {response} = this.state;
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
                    <TextField style={styles.textarea} value={this.state.chatMsg}
                    onChange={this.handleMsgChange}  placeholder="Type message.." name="msg" required></TextField>
                    <Button type="submit" onClick={this.handleSubmit} className="btn">Send</Button>
                    <Button onClick={this.closeChat} className="btn cancel">Close</Button>
                    </form>
                </div>
                }
            </div>
        );
    }
}

export default ChatWindow
