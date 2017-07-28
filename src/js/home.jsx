import '../css/style.scss'
import React, { Component } from 'react';
import { render } from 'react-dom';
import Test from './test'
import NameForm from './formTest'



class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = { data: new Date(), numbers: ['a', 'b', 'c', 'd', 'e'], inpValue: 'focus', like: 'like' }
  }
  changeInp(event) {
    this.setState({
      inpValue: 'new Value'
    })
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    this.refs.myInput.focus()
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      data: new Date()
    });
  }

  changeLikeState() {
    this.setState({
      like: (this.state.like == 'like') ? 'unlike' : 'like'
    })
  }
  render() {
    const liItems = this.state.numbers.map((index, item) => {
      return <li key={index.toString()}>li {item}</li>
    })

    return (
      <div>
        <ul>{liItems}</ul>
        <p>now time is {this.state.data.toLocaleTimeString()}</p>
        <input onChange={this.changeInp.bind(this)} ref='myInput' type="text" value={this.state.inpValue} />
        <button onClick={this.changeLikeState.bind(this)}>{this.state.like}</button>
        <h2>form</h2>
        <NameForm />

      </div>
    )
  }
}


function App() {
  return (
    <div>
      <Clock />

    </div>
  );
}

// render(
//   <App />,
//   document.getElementById('app')
// );




// function Clock(props) {
//   return (
//     <div>
//       <p>now time is {props.data.toLocaleTimeString()}</p>
//     </div>
//   )
// }

// function ticker() {

//   const element = (
//     <div>
//       <Test name='Component' />
//       <h1>hello</h1>
//       <p>now time is: {new Date().toLocaleTimeString()}</p>
//     </div>
//   )
//   render(
//     <Clock />,
//     document.getElementById('app')
//   )

// }

// setInterval(ticker, 1000)