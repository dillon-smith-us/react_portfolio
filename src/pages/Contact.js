import React from 'react';
import Jumbo from '../components/Jumbo'
import Content from '../components/Content'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Contact extends React.Component {
     constructor(props) {
     super(props);
     this.state = {
        name: '',
        email: '',
        message: '',
        disabled: 'false',
        emailSent: 'null',
    }
}

change = (e) => {
    console.log(e);
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
        [name]: value
    })
}

submit = (e) => {
    e.preventDefault();
// make sure they don't send two emails
// keep in mind what services you are using
    this.setState({
        disabled: true
    })
}

    render() {
        return(
            <div>
                <Jumbo title={this.props.title} />
                <Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">
                                Full Name
                            </Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.change}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="full-name">
                                Email
                            </Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.change}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="message">
                                Message
                            </Form.Label>
                            <Form.Control id="message" name="message" as="textarea"rows="4" value={this.state.message} onChange={this.change}/>
                        </Form.Group>

                        <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>SEND</Button>

                        {this.state.sent === true && <p className="d=inline succes-msg">Email Sent</p>}
                        {this.state.sent === false && <p className="d=inline error-msg">Error. Email not sent.</p>}
                    </Form>
                </Content>
            </div>
        );
    }
}

export default Contact;