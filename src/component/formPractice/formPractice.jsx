import React, { Component } from 'react';


class formPractice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            isFriendly: true
        }
    }

    handleInput = (e) => {
        const { name, value, type, checked } = e.target;
        type === 'checkbox' ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }
    render() {
        return (

            <form>
                <input
                    type='text'
                    placeholder='First name'
                    name='firstname'
                    onChange={this.handleInput}
                    value={this.state.firstname} />
                <br />
                <br />
                <input
                    type='text'
                    placeholder='Last name'
                    name='lastname'
                    onChange={this.handleInput}
                    value={this.state.lastname} />
                <br />
                <br />

                <textarea
                    value={'enter something'}
                    onChange={this.handleInput} />
                <br />
                <br />

                <label>
                    <input
                        type='checkbox'
                        name='isFriendly'
                        checked={this.state.isFriendly}
                        onChange={this.handleInput} />  Is Friendly
                </label>
                <br />
                <br />
                <label>
                    <input
                        type='radio'
                        name='gender'
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleInput} />  male
                </label>
                <br />
                <br />
                <label>
                    <input
                        type='radio'
                        name='gender'
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleInput} />  female
                </label>
                <h1>{this.state.firstname} {this.state.lastname}</h1>

            </form>


        )
    }
}

export default formPractice;