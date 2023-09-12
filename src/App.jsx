import React from 'react';
import './App.css';
import classComponent from './classComponent';
import childrenComponent from './childrenComponent';
import functionComponent from './funcitionComponent';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
        users: [
          {name: 'Karla', age: '27'},
          {name: 'Ivan', age: '34'},
          {name: 'Sani', age: '30'},
        ],
    };
  }
  
  render(){
    return (
      <div>
        <h1>App Component</h1>
        <classComponent name={this.state.users[0].name} age={this.state.users[0].age}></classComponent>
        <functionComponent name={this.state.users[1].name} age={this.state.users[1].age}></functionComponent>
        <childrenComponent name={this.state.users[2].name} age={this.state.users[2].age}>
          <p>Children props</p>
        </childrenComponent>
      </div>
    );
  }
  
}

export default App
