import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Juanjo", age: 29 },
      { name: "Max", age: 28 },
      { name: "Stephanie", age: 26 }
    ],
    otherState: "some other value"
  };

  switchNameHandler = newName => {
    // console.log('Was clicked!');
    //! DON'T DO THIS: this.state.persons[0].name = 'Juan José';
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: "Max", age: 28 },
        { name: "Stephanie", age: 27 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Juanjo", age: 30 },
        { name: event.target.value, age: 28 },
        { name: "Stephanie", age: 27 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      borderRadius: "5px"
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <h2>By Juanjo</h2>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler("Juan José!!")}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Juanjo!")}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
