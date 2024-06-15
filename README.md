# To-do List Application

A simple and intuitive Todo List application built with React. This app allows users to add, remove, filter, and sort tasks, with data persistence using local storage.

## Features

- **Add Tasks**: Add tasks with a description and a due date.
- **Remove Tasks**: Remove tasks from the list.
- **Toggle Completion**: Mark tasks as completed or active.
- **Filter Tasks**: Filter tasks by their status: all, active, or completed.
- **Sort Tasks**: Sort tasks by their creation date or due date.
- **Persisted Storage**: Tasks are stored in local storage, so they persist between page reloads.

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/todo-list-app.git
   cd todo-list-app


2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the application**
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to see the application.

## Usage

### Adding a Task

1. Enter a task description in the input field.
2. Select a due date.
3. Click the "Add Task" button.

### Managing Tasks

- **Toggle Completion**: Click the checkbox next to a task to mark it as completed or active.
- **Remove Task**: Click the trash icon next to a task to remove it.

### Filtering and Sorting

- **Filter Tasks**: Use the dropdown to filter tasks by status (All, Active, Completed).
- **Sort Tasks**: Use the dropdown to sort tasks by creation date or due date.

## File Structure

- `App.js`: Main component file containing the logic and JSX for the Todo List.
- `App.css`: CSS file for styling the components.
- `index.js`: Entry point for the React application.
- `index.css`: Global styles.

## Components

### TodoList Component

**State Variables**
- `todos`: Array of todo objects, each with properties like `id`, `text`, `completed`, `createdAt`, and `dueDate`.
- `newTask`: String for the new task description.
- `newDueDate`: Date string for the new task's due date.
- `filter`: String indicating the current filter ('all', 'active', 'completed').
- `sortBy`: String indicating the current sort criterion ('created', 'dueDate').

**Effects**
- **Load from Local Storage**: On component mount, load the todos from local storage.
- **Save to Local Storage**: Whenever the `todos` state changes, save the current todos to local storage.

**Functions**
- `addTask`: Adds a new task to the list. Ensures the task description and due date are provided.
- `toggleComplete`: Toggles the completion status of a task.
- `removeTask`: Removes a task from the list.
- `filteredTodos`: Filters the tasks based on the current filter.
- `sortedTodos`: Sorts the filtered tasks based on the current sort criterion.


## Code Overview

### `App.js`

The main component that contains the core functionality of the Todo List application. It includes:

- **State Management**: Uses React hooks (`useState`, `useEffect`) to manage the state of the tasks, input fields, and filters.
- **Task Operations**: Functions to add, remove, toggle completion, filter, and sort tasks.
- **Persistence**: Uses `localStorage` to persist tasks between page reloads.

### `App.css`

Contains the styling for the application, including layout, input fields, buttons, and task items.

**JSX Structure**
- **Header**: Displays the application title.
- **Task Input**: Input fields for task description and due date, and a button to add the task.
- **Task List**: Displays the list of tasks, allowing users to toggle completion and remove tasks.
- **Filter and Sort Controls**: Dropdowns to filter and sort tasks.

## Screenshots-Working Illustration
Users can add tasks with a description of their tasks and with a due date, then filter and sort these tasks based on their status and due date.
Users can also remove the task if they want to and the tasks saved are in the local storage, so they remain available even after the page is refreshed.


![WhatsApp Image 2024-06-15 at 11 29 49_abf9914b](https://github.com/ipsita68/to-do-list/assets/121110612/494070b1-b375-4161-aa1b-a9d34298d7f5)
![WhatsApp Image 2024-06-15 at 11 25 57_94dab48e](https://github.com/ipsita68/to-do-list/assets/121110612/9c301736-2ac3-4a63-b623-ca6dedfc93d4)
![WhatsApp Image 2024-06-15 at 11 26 13_329efd14](https://github.com/ipsita68/to-do-list/assets/121110612/f2f89a64-5273-4528-8613-a0c6980a8cf4)
![WhatsApp Image 2024-06-15 at 11 26 34_c3403523](https://github.com/ipsita68/to-do-list/assets/121110612/0913dcdd-33de-4ce3-9ba2-6e5a5da11646)
![WhatsApp Image 2024-06-15 at 11 26 52_4737d153](https://github.com/ipsita68/to-do-list/assets/121110612/eb7ed83f-1c1b-45b2-b408-d658129d6524)
![WhatsApp Image 2024-06-15 at 11 27 11_522dc063](https://github.com/ipsita68/to-do-list/assets/121110612/b9da243e-d427-4400-835b-f37fd98760dd)
![WhatsApp Image 2024-06-15 at 11 27 50_16f2aa94](https://github.com/ipsita68/to-do-list/assets/121110612/38d28862-e40a-415d-b74f-0d79bf69e6be)


## Input Validation

Input Validation has also been take care of: When users click on add task without adding a task description or a due date, they are taken to an error dialog which ensures that users are adding a task description as well as due date.


![image](https://github.com/ipsita68/to-do-list/assets/121110612/27486467-92fe-4931-8fff-c81c59d9d214)
![image](https://github.com/ipsita68/to-do-list/assets/121110612/66b18269-eee5-4d46-857c-2d9171b55423)







