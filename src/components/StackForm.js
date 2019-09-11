import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStack } from '../actions';
import { Link } from 'react-router-dom';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

export class StackForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            cards: []
        }
    }

    addCard = () => {
        const { cards } = this.state;
        cards.push({ id: cards.length, prompt: '', answer: '' });
        this.setState({ cards });
    }

    addNewStack = () => {
        const { cards, title } = this.state;
        this.props.addStack({ title, cards });
    }

    updateStackPart = (event, index, part) => {
        const { cards } = this.state;
        cards[index][part] = event.target.value
        this.setState({ cards });
    }
    render() {

        return (
            <div>
                <h1>Create a New Stack</h1>
                <Link to="/" className="link-home">
                    <h4>Home</h4>
                </Link>
                <Form>
                    <FormGroup>
                        {/* <ControlLabel>Title:</ControlLabel> */} Title:
                        {' '}
                        <FormControl onChange={(event) => this.setState({ title: event.target.value })} />
                        <br />
                        {this.state.cards.map((card, index) => (
                            <div key={card.id}>

                                <FormGroup>
                                    Prompt:
                            {' '}
                                    <FormControl onChange={(event) => this.updateStackPart(event, index, 'prompt')} />
                                    Answer:
                            {' '}
                                    <FormControl onChange={(event) => this.updateStackPart(event, index, 'answer')} />
                                    <br />
                                </FormGroup>
                            </div>
                        ))}
                        <br />
                        <Button onClick={this.addCard}>Add Card</Button>
                        {' '}
                        <Button onClick={this.addNewStack}>Save and Add Stack</Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default connect(null, { addStack })(StackForm);