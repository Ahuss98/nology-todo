# ✅ My Todo List

A simple **Todo List** web app built using **HTML, SCSS (BEM), and TypeScript**, featuring:
- **Dynamic greetings** based on the time of day 🌞🌙  
- **An API-powered random quote generator** 📝  
- **Smooth user interaction** through event listeners & handlers 🎯  

---

## 📌 Features & Functionality

### 📝 1️⃣ Add New Todos
✔ Users can enter a task and add it to the list.  
✔ The input field **clears after submission**.  
✔ **Empty submissions are prevented**.  
✔ Requires an **event listener** on the **Add button**.  

### ❌ 2️⃣ Delete (Complete) Todos
✔ Clicking on a **delete button** (🗑️) removes the task from the list.  
✔ Requires an **event listener** on the **Delete button**.  
✔ Can include a **smooth animation** before deletion.  

### ⏳ 3️⃣ Dynamic Greeting Based on Time of Day
✔ Shows a greeting (`Good Morning!`, `Good Afternoon!`, `Good Evening!`) based on local time.  
✔ **Updates automatically** when the page loads.  

### 📰 4️⃣ Fetch a Welcome Message or Random Fact from an API
✔ Fetches a **random quote, motivational message, or joke** from an API.  
✔ Displays the fetched **message dynamically** on the page.  
✔ **Updates every page refresh** (or on button click).  

---

## 🏗️ Project Structure

### **📄 HTML Elements**
- [ ] `<h1>` for the **title**  2DO2DONE
- [ ] `<p>` for the **random quote/message**  
- [ ] `<div>` for the **input text box** and **Add Todo button**  
- [ ] `<div>` for the **list of todos** and their **Delete buttons**  

---

## 🎨 SCSS Styling (BEM)
- [ ] **Rounded edges** for buttons  
- [ ] **Color scheme:** Baby blue RGB(137, 207, 240) & camel brown RGB(193, 154, 107)
- [ ] **Camel** is the theme animal   
- [ ] **Hover effects:**  
  - [ ] Buttons **enlarge** and **change text color**  
  - [ ] Cursor **pointer effect** on buttons  

---

## 🛠️ TypeScript 

- ### Handlers

### 📌 `handleAddTodo(event: Event)`
- [x] Prevents **default form submission**.  
- [x] Captures **user input** and adds it to the list.  
- [x] **Clears the input field** after adding the task.  

### 🗑️ `handleDeleteTodo(event: Event)`
- [x] Detects **which delete button** was clicked.  
- [x] Removes the corresponding **todo item**.  
- [ ] Optionally adds **fade-out animation** before removal.  

### ⏳ `handleGreeting()`
- [ ] Checks the **current time**.  
- [ ] Updates the greeting (`Good Morning!`, `Good Afternoon!`, `Good Evening!`).  

### 🌍 `fetchRandomMessage()`
- [ ] Fetches a **random quote or message** from an API (`https://api.quotable.io/random`).  
- [ ] Updates the UI with the **retrieved data**.  

- ### Listeners
- [ ] click **listener** for the **add** button 
- [ ] click **listener** for **delete** button 
- [ ] **DOMContentLoaded** to load inital greeting and **fetches** initial data
- [ ] **keydown** to allow users to **add** todos with **enter**