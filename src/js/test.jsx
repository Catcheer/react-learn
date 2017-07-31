import React, { Component } from 'react';
import { render } from 'react-dom';


export default class Test extends Component {
  constructor(props) {
    super(props)
  }



  render() {
    return <div>
      <h1 className='welcome-title'>Dialog</h1>
      <article className='welcome-content'>
        <p>welcome {this.props.name}</p>
         <p>now time is {this.props.date}</p> 
      </article>
    </div>
  }
}

