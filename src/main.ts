import './style.scss'

const inputBox = document.querySelector<HTMLInputElement>('.add-todo-container__todo-text')
const addButton = document.querySelector<HTMLButtonElement>('.add-todo-container__todo-text-add')
const todoListContainer = document.querySelector<HTMLDivElement>('.todo-list-container')
const todoDoneContainer = document.querySelector<HTMLDivElement>('.todo-done-container')
const welcomeMessageContainer = document.querySelector<HTMLDivElement>('.welcome-message-container')
const priority = document.querySelector<HTMLSelectElement>('#priority')

if(!inputBox || !addButton || !todoListContainer || !welcomeMessageContainer || !priority || !todoDoneContainer){
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
  const year = date.getFullYear();
  const month = date.getMonth() + 1; 
  const day = date.getDate();
  console.log(`${year}/${month}/${day}`)
  return `${day}/${month}/${year}`
}


const priorityColourFinder = ():string => {
  const urgancy = priority.value
  if(urgancy === 'urgent'){
    return 'red'
  } else if(urgancy === 'moderate'){
    return 'yellow'
  } else {
    return  'white'
  }
}

//api refrence http://localhost:8000/todos

const readJson = async () => {
  const apiData = await fetch('http://localhost:8000/todos')
  const cleanApiData = await apiData.json()
  console.log(cleanApiData)
  return cleanApiData
}
const writeJson = async (todoText:string) => {
  const response = await fetch("http://localhost:8000/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task: todoText }),
  });
  return await response.json();
}

const handleAddTodo = async () => {
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
  
  deleteTodo.addEventListener('click', async ()  => {
    type Todo = {
      task: string;
    }
    await writeJson(newTodo.innerText);
    const arrOfObj:Todo[] = await readJson()
    const doneTodoItem = document.createElement("div");
    doneTodoItem.classList.add("done-todo-item");
    todoDoneContainer.innerHTML = ''
    todoDoneContainer.appendChild(doneTodoItem)
    arrOfObj.forEach((task:Todo) => {
      const doneTask = document.createElement('p')
      doneTask.classList.add('doneTask')
      doneTodoItem.appendChild(doneTask)
      doneTask.innerText = task.task
      
    });
    todoItem.remove()
  })
}


addButton.addEventListener('click',handleAddTodo)
document.addEventListener('DOMContentLoaded',handleWelcomeMessage)
