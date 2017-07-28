import React, { Component } from 'react'
import { render } from 'react-dom'

export default class NameForm extends Component {
  constructor(props) {
    super(props)
    this.state = { myInput: '', isGoing: true, numberOfGuests: 2 }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleInputChange = this.handleInputChange.bind(this)
  }
  handleChange(event) {
    const target = event.target
    const name = target.name
    let val
    if (target.type == 'text') {
      val = target.value
    } else {
      val = target.checked
    }

    this.setState({
      [name]: val
    })
  }

  handleSubmit(event) {
    console.log('a name is submit ' + JSON.stringify(this.state))
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} action="">
        <label>
          isGoing:
          <input type="checkbox" name="isGoing" onChange={this.handleChange} checked={this.state.isGoing} />
        </label>
        <label>
          Name:
            <input name='myInput' onChange={this.handleChange} value={this.state.myInput} type="text" />
        </label>
        <button type='submit'> submit</button>
      </form>
    )
  }
}