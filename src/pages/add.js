import React, { Component } from 'react'

export class add extends Component {
    constructor(){
        super()
        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            age: '',
            nationality: '',
            isAgeValid: true,
            isIdValid: true
        }
    }
    onAddStudent = async (e) => {
        e.preventDefault()
        
        await this.setState({
            isIdValid : this.state.id > 0? true:false,
            isAgeValid : this.state.age > 0? true:false
        })
        
        if(this.state.isAgeValid && this.state.isIdValid){
            const userData = {
                id: this.state.id,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                age: this.state.age,
                nationality: this.state.nationality
            }
            this.setState({
                id: '',
                firstName: '',
                lastName: '',
                age: '',
                nationality: ''
            })
            console.log(userData);
        }
       
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })   
    }
    render() {
        return (
            <div className="add-container">
                <form onSubmit={this.onAddStudent}>
                    <div className="input">
                        <label htmlFor="id">ID:</label>
                        <input type="number" name="id" onChange={this.handleChange}/>
                    </div>
                    {!this.state.isIdValid?(<div className="error"> Please enter a valid id</div>):''}
                    <div className="input">
                        <label htmlFor="first-name">First name:</label>
                        <input type="text" name="firstName" onChange={this.handleChange}/>
                    </div>
                    <div className="input">
                        <label htmlFor="last-name">Last name:</label>
                        <input type="text" name="lastName" onChange={this.handleChange}/>
                    </div>
                    <div className="input">
                        <label htmlFor="age">Age:</label>
                        <input type="number" name="age" onChange={this.handleChange}/>
                    </div>
                    {!this.state.isAgeValid?(<div className="error"> Please enter a valid age</div>):''}
                    <div className="input">
                        <label htmlFor="nationality">Nationality:</label>
                        <input type="text" name="nationality" onChange={this.handleChange}/>
                    </div>
                    <div className="input">
                        <button className="submit-button" type="submit">Add student</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default add
