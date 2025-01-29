import './style.scss'

const inputBox = document.querySelector<HTMLInputElement>('.add-todo-container__todo-text')
const addButton = document.querySelector<HTMLButtonElement>('.add-todo-container__todo-text-add')
const todoListContainer = document.querySelector<HTMLDivElement>('.todo-list-container')
const todoDoneContainer = document.querySelector<HTMLDivElement>('.todo-done-container')
const welcomeMessageContainer = document.querySelector<HTMLDivElement>('.welcome-message-container')
const priority = document.querySelector<HTMLSelectElement>('#priority')

if(!inputBox || !addButton || !todoListContainer || !welcomeMessageContainer || !priority){
  throw new Error ('it didnt work')
}

const handleInput = ():string => {
  const inputValue = inputBox.value.trim()
  return inputValue
}

const handleWelcomeMessage = async () => {
  const messageData = await fetch(`https://api.quotable.io/random?size=1`)
  const cleanMessageData = await messageData.json()
  const dailyMessage = document.createElement('p')
  dailyMessage.classList.add('dailyMessage')
  const date = new Date()
  const currentHour = date.getHours()
  let greeting = ''
  if(currentHour < 12 && currentHour > 0){
    greeting = `Good Morning!`
  } else if (currentHour < 17){
    greeting = `Good Afternoon!`
  } else if(currentHour < 21){
    greeting = `Good Evening!`
  }
  console.log(cleanMessageData)
  dailyMessage.innerText = `${greeting} ${cleanMessageData.content}`
  welcomeMessageContainer.appendChild(dailyMessage)
}

const findTimeNow = ():string => {
    const date = new Date()
  // const currentHour = date.getHours()
  const year = date.getFullYear(); // 2024
  const month = date.getMonth() + 1; // Months are 0-based, so add +1
  const day = date.getDate();
  console.log(`${year}/${month}/${day}`)
  return `${day}/${month}/${year}`
}


const priorityColourFinder = ():string => {
  const urgancy = priority.value
  let urgancyColor = 'white'
  if(urgancy === 'urgent'){
    return urgancyColor = 'red'
  } else if(urgancy === 'moderate'){
    return urgancyColor = 'yellow'
  } else {
    return urgancyColor = 'white'
  }
}
const handleAddTodo = (event: Event) => {
  const inputValue = handleInput()  
  if (!inputValue) return;
  console.log(priority.value)
  
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");
  todoListContainer.appendChild(todoItem)

  const dateCreated = document.createElement('p')
  dateCreated.classList.add('date-created')
  dateCreated.innerText = findTimeNow()
  todoItem.appendChild(dateCreated)
  
  const newTodo = document.createElement('p');
  newTodo.classList.add('newTodo');
    newTodo.innerText = ` ${inputValue}`
    newTodo.style.color = `${priorityColourFinder()}`
  todoItem.appendChild(newTodo);

  const deleteTodo = document.createElement('button');
  deleteTodo.classList.add('deleteTodo');
  deleteTodo.innerText = '2Done'
  todoItem.appendChild(deleteTodo);

  inputBox.value = ""
  deleteTodo.addEventListener('click', () => {
    // todoDoneContainer?.appendChild(newTodo)
    todoItem.remove()
  })
}


addButton.addEventListener('click',handleAddTodo)
document.addEventListener('DOMContentLoaded',handleWelcomeMessage)
