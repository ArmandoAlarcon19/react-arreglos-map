import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class Blog  extends Component{
  constructor(props){
    super(props);
    this.state ={
      names:[
        'Armando',
        'Jaz',
        'Mariana'
      ]
    };
  }

  render(){
    return(
      <div>
        {
          this.state.names.map((name)=> {
            return <p>{name}</p>
          })
        }
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Blog />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
