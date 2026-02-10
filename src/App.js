/******************************************************************************
Filename: App.js
Author: David A. Sowles
Created: 02/09/2026
Description:  Root component of the application, responsible for high-level 
              layout and provider initialization.
******************************************************************************/


/******************************************************************************
Imports
******************************************************************************/

import React, {Component} from 'react';

/*****************************************************************************/


/******************************************************************************
Class Component Definitions
******************************************************************************/

// Class components must inherit from the Component Parent class
class UserInfo extends Component {
  // The constructor of the class component will expect an object
  // which encapsulates the JSX properties which were passed to
  // the component (assuming some were passed).
  constructor(props) {
    // Make sure to call the parent's constructor first.
    super(props);
    // In this case, the class component's information will simply
    // be defined as a class field.
    this.state = {
      name: "Gordan Freeman",
      profession: "Theoretical Physicist"
    };
    this.luckyNumber =  Math.floor(Math.random() * 100) + 1;
  }

  // Class components must define a render function which returns
  // the required JSX for the component.
  render() {
    return (
      <div style={{fontSize:24}}>
        {/* Task: Use JSX to return name and profession */}
        <h2>User Profile</h2>
        <p>Name: {this.state.name}</p>
        <p>Profession: {this.state.profession}</p>
        <p>Your lucky number is: {this.luckyNumber}</p>
      </div>
    );
  }
}

/*****************************************************************************/


/******************************************************************************
Function Component Definitions
******************************************************************************/

function Greeting() {
  return (

    <>
      <h1>Hello, Welcome to React!</h1>
      <p style={{
        color: "cadetblue",
        fontSize: 24,
        backgroundColor: "peachpuff",
        width: 180
      }}>
        This is going to be fun!
      </p>

      <p style={{fontSize:24}}>Today's date and time is: {(new Date()).toLocaleString()}</p>
    </>

  );
}

// Creates a functional component that setups up the overall layout of the
// React app. This is also where the React app's "root" element will be.
function App() {
  return (
    <main>
      <Greeting />
      <br />

      <UserInfo />
    </main>
  );
}

/*****************************************************************************/

export default App;
