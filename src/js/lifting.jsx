import React, { Component } from 'react'
import { render } from 'react-dom'

const scaleNames = {
  'c': 'Celsius',
  'f': 'Fahrenheit'
}

function BoilingVerdict(props) {
  console.log(props.celsius > 100)
  if (props.celsius > 100) {
    return (<p>the water would  boil</p>)
  }
  return (<p>the water would not boil</p>)
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}


function tryConvert(temperature, conver) {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) return ''
  const output = conver(input)
  const rounded = Math.round(output * 1000) / 1000
  return rounded.toString()

}

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = { temperature: '', scale: 'c' }
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
  }
  handleCelsiusChange(temperature) {
    this.setState({
      temperature: temperature,
      scale: 'c'
    })
  }

  handleFahrenheitChange(temperature) {
    this.setState({
      temperature: temperature,
      scale: 'f'
    })
  }


  render() {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    )
  }
}

class TemperatureInput extends Component {
  constructor(props) {
    super(props)
    this.state = { temperature: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value)
  }

  render() {
    const scale = this.props.scale
    const temperature = this.props.temperature
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input type="text" value={temperature} onChange={this.handleChange} />
      </fieldset>
    )
  }

}



// render(
//   <Calculator />,
//   document.getElementById('app')
// )

