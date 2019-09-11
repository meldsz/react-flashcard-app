import React, { Component } from "react";
import { connect } from 'react-redux';
import stacks from "../data/stack.json";
import { Link } from "react-router-dom";
import { setStack, loadStack } from '../actions';

export class StackList extends Component {

    componentDidMount() {
        if (this.props.stacks.length === 0) {
            this.props.loadStack(stacks);
        }
    }
    render() {
        return (
            <div>
                {this.props.stacks.map(stack => {
                    return (
                        <div key={stack.id} >
                            <Link to="/stack" onClick={() => this.props.setStack(stack)}>
                                <h2>{stack.title}</h2>
                            </Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { stacks: state.stacks };
}
export default connect(mapStateToProps, { setStack, loadStack })(StackList);