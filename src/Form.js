import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            name: '',
            phoneNumber: '',
            occupation: '',
        }

        this.state = this.initialState;
    }
    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
    render () {
        const { name, phoneNumber, occupation } = this.state

        return(
            <form>
                <label>Name</label>
                <input 
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange} />

                <label>Phone Number</label>
                <input 
                type="text"
                name="phoneNumber"
                value={phoneNumber}
                onChange={this.handleChange} />

                <label>Occupation</label>
                <input 
                type="text"
                name="occupation"
                value={occupation}
                onChange={this.handleChange} />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        )
    }
}

export default Form;