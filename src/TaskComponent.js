/******************************************************************************
Filename: TaskComponent.js
Author: David A. Sowles
Created: 02/09/2026
Description:    Defines a component which uses dynamic JSX content.
******************************************************************************/


function TaskComponent() {
  const tasks = [
    "Go get a cheeseburger.",
    "Do some studying.",
    "Do your homework",
    "Go for a walk.",
    "Pay some bills.",
    "Write a book."
  ];

  // Logic to pick the random string
  const randomIndex = Math.floor(Math.random() * tasks.length);
  const selectedTask = tasks[randomIndex];

  // Task: Return the JSX (h3) from this function
  return <h3 style={{fontSize:24}}>Your task is: {selectedTask}</h3>;
}


export default TaskComponent;