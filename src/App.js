import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Max', age: 28 },
      {id: '2', name: 'Manu', age: 29 },
      {id: '3', name: 'Stephanie', age: 26 }
    ],
    //otherState: 'some other value',
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

   nameChangedHandler = (event, id) => {
     const personIndex = this.state.persons.findIndex(p=> {
       return p.id === id;
     });

     const person = {
      ...this.state.persons[personIndex]
     };
     //const person = Object.assign({}, this.state.persons[personIndex]);
    
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex]=person;

    this.setState({persons: persons})

  }

  deletePersonHandler = (personIndex) => {
    //const  persons = this.state.persons;
    const persons=[...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render () {
    const style ={
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    let persons = null;
    
    if ( this.state.showPersons ){
      persons=(
          <div>
          {this.state.persons.map((person, index) => {
            return <Person
            click={ () =>this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age} 
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
          </div>
         
      );
      style.backgroundColor = 'red';
    }
    
    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red'); //classes=['red']
    }
    if(this.state.persons.length <= 1){
      classes.push('bold'); //classes=['red','bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}> working </p> 
        <button
        style={style} 
        onClick={this.togglePersonsHandler}>Ocultar/Mostrar personas</button>
          {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }


}



export default Radium(App);
