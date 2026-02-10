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

//import React, {Component} from 'react';
import Greeting from './Greeting';
import UserInfo from './UserInfo';
import TaskComponent from './TaskComponent';
/*****************************************************************************/



// Creates a functional component that setups up the overall layout of the
// React app. This is also where the React app's "root" element will be.
function App() {

  return (
    <div>
      <h1>Task 1</h1>
      <Greeting />
      <br />

      <h1>Task 2</h1>
      <UserInfo />
      <br />

      <h1>Task 3</h1>
      <TaskComponent />

    </div>
  );
}

/*****************************************************************************/

export default App;
