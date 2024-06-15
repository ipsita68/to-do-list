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


![WhatsApp Image 2024-06-15 at 16 07 26_61cfc7ae](https://github.com/ipsita68/to-do-list/assets/121110612/ae5d89f4-d782-4682-8e92-58c949ae46d1)
![WhatsApp Image 2024-06-15 at 16 04 29_4734dc2b](https://github.com/ipsita68/to-do-list/assets/121110612/9e8bcbeb-4a38-432d-9b92-14969f7ab79d)
![WhatsApp Image 2024-06-15 at 16 04 55_7d0b60eb](https://github.com/ipsita68/to-do-list/assets/121110612/3c2df213-9efe-433a-9884-d33281fd792b)
![WhatsApp Image 2024-06-15 at 16 05 21_1cf13513](https://github.com/ipsita68/to-do-list/assets/121110612/6d84dd2e-5cfa-49f4-826b-bcfd62ea9421)
![WhatsApp Image 2024-06-15 at 16 05 45_0efd0078](https://github.com/ipsita68/to-do-list/assets/121110612/96814b79-451b-44a0-93e4-8afb4edd3b81)
![WhatsApp Image 2024-06-15 at 16 06 16_98e98f12](https://github.com/ipsita68/to-do-list/assets/121110612/2293cff2-06db-4168-b45a-f03cf345a3ff)



## Input Validation

Input Validation has also been take care of: When users click on add task without adding a task description or a due date, they are taken to an error dialog which ensures that users are adding a task description as well as due date.

![WhatsApp Image 2024-06-15 at 16 07 47_9d74f9fc](https://github.com/ipsita68/to-do-list/assets/121110612/73427edf-b214-42be-a107-a1a5084f31a6)
![WhatsApp Image 2024-06-15 at 16 10 53_72bef9e2](https://github.com/ipsita68/to-do-list/assets/121110612/1ac5009d-4d80-4097-93a9-fc8238c302c5)








