import React, { Component } from 'react'

class fullForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            restrictions: {
                petrol: false,
                desel: false,
                highoctane: false
            }
        }
    }

    handleInput = (e) => {
        const { name, value, type, checked } = e.target;
        type === "checkbox" ?
            this.setState(prevState => {
                return {
                    restrictions: {
                        ...prevState.restrictions,
                        [name]: checked
                    }
                }

            })
            :
            this.setState({
                [name]: value
            })

    }
    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="firstname"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleInput} />
                    <br />
                    <input
                        type="text"
                        placeholder="lastname"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleInput} />
                    <br />
                    <input
                        type="text"
                        placeholder="age"
                        name="age"
                        value={this.state.age}
                        onChange={this.handleInput} />
                    <br />

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleInput} /> male
                    </label>
                    <br />

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleInput} /> female
                    </label>
                    <br />
                    <br />

                    <select value={this.state.destination} name="destination" onChange={this.handleInput}>
                        <option value="">Please choose destination---</option>
                        <option value="lahore">Lahore</option>
                        <option value="islamabad">Islamabad</option>
                        <option value="peshawar">Peshawar</option>
                        <option value="karachi">Karachi</option>

                    </select>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="petrol"
                            checked={this.state.restrictions.petrol}
                            onChange={this.handleInput}
                        /> petrol
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="desel"
                            checked={this.state.restrictions.desel}
                            onChange={this.handleInput}
                        /> desel
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="highoctane"
                            checked={this.state.restrictions.highoctane}
                            onChange={this.handleInput}
                        /> highoctane
                    </label>

                </form>


                <h1>Gathered Information...</h1>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>your age: {this.state.age} </p>
                <p>gender: {this.state.gender}</p>
                <p>destination: {this.state.destination}</p>
                <p>restrictions: {this.state.restrictions.petrol ? "Yes" : "fasle"} &nbsp;
                     {this.state.restrictions.desel ? "Yes" : "fasle"} &nbsp;
                     {this.state.restrictions.highoctane ? "Yes" : "fasle"}</p>
            </div>
        )
    }
}


export default fullForm;