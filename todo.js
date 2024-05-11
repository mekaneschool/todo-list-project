/*
how can i solve the problem??
when the input enter data display blow:
  with date and delete button.
when delete button is clicked the date and content of the displayed will       disappear.
using array data structure: push remove splice(intial, amount)
*/

const todoInfo = [];
let todoContent = {};
let displayHTML = '';
const deleteButton = '';
function render() {
  displayHTML = '';
  /*for (let i = 0; i < todoInfo.length; i++) {
    displayHTML += `<div>${todoInfo[i].name}</div><div>${todoInfo[i].date}</div><button class="delete" onclick="todoInfo.splice(${i},1);render()">Delete</button>`;
  }
  */
 //short cut of normal for loop.
  todoInfo.forEach((todoButton, index) => {
    displayHTML += `<div>${todoButton.name}</div><div>${todoButton.date}</div><button class="delete">Delete</button>`;
  });

  document.querySelector('.todoListDisplay').innerHTML = displayHTML;
  document.querySelectorAll('.delete').forEach((button, index) => {
    button.addEventListener('click', () => {
      todoInfo.splice(index, 1);
      render();
    });
  });

}

function display() {
  let inputTodo = document.querySelector('.todoInput');
  let inputDate = document.querySelector('.js-date');

  todoContent.name = inputTodo.value;
  todoContent.date = inputDate.value;
  if (inputTodo.value != '' && inputDate.value != '') {
    todoInfo.push(todoContent);
    inputTodo.value = '';
    inputDate.value = '';
    todoContent = {};
    render();
  }
}
let nums=[1,3,4,3,34,35,89,43];
let n=nums;
console.log(n.filter((todo,index)=>{
  return todo%2===0;
}));
