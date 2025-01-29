import './style.scss'

const inputBox = document.querySelector<HTMLInputElement>('.add-todo-container__todo-text')
const addButton = document.querySelector<HTMLButtonElement>('.add-todo-container__todo-text-add')
const todoListContainer = document.querySelector<HTMLDivElement>('.todo-list-container')
const welcomeMessageContainer = document.querySelector<HTMLDivElement>('.welcome-message-container')

if(!inputBox || !addButton || !todoListContainer || !welcomeMessageContainer){
  throw new Error ('it didnt work')
}

const handleInput = ():string => {
  const inputValue = inputBox.value.trim()
  return inputValue
}
const handleAddTodo = (event: Event) => {
  const inputValue = handleInput()  
  if (!inputValue) return;

  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");
  todoListContainer.appendChild(todoItem)

  const newTodo = document.createElement('p');
  newTodo.classList.add('newTodo');
  newTodo.innerText = `${inputValue}`
  todoItem.appendChild(newTodo);

  const deleteTodo = document.createElement('button');
  deleteTodo.classList.add('deleteTodo');
  deleteTodo.innerText = 'Delete'
  todoItem.appendChild(deleteTodo);

  inputBox.value = ""
  deleteTodo.addEventListener('click', () => {
    todoItem.remove()
  })
}


addButton.addEventListener('click',handleAddTodo)
