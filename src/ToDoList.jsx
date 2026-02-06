import { useState } from "react";

function ToDoList() {
	const [tasks, setTasks] = useState([
		"Eat breakfast",
		"Take a shower",
		"Walk a dog",
	]);
	const [newTask, setNewTask] = useState("");

	function handleInputChange(event) {
		setNewTask(event.target.value);
	}

	function addTask() {
		if (newTask.trim() !== "") {
			setTasks(prevTasks => [...prevTasks, newTask]);
			setNewTask("");
		}
	}

	function deleteTask(index) {
		setTasks(prevTasks =>
			prevTasks.filter(function (_, i) {
				return i !== index;
			}),
		);
	}

	function moveTaskUp(index) {
		if (index > 0) {
			const updatedTask = [...tasks];

			[updatedTask[index], updatedTask[index - 1]] = [
				updatedTask[index - 1],
				updatedTask[index],
			];
			setTasks(updatedTask);
		}
	}

	function moveTaskDown(index) {
		if (index < tasks.length - 1) {
			const updatedTask = [...tasks];

			[updatedTask[index], updatedTask[index + 1]] = [
				updatedTask[index + 1],
				updatedTask[index],
			];
			setTasks(updatedTask);
		}
	}

	return (
		<div className="to-do-list">
			<h1>To Do List </h1>

			<div>
				<input
					type="text"
					placeholder="Enter a task"
					value={newTask}
					onChange={handleInputChange}
				/>
				<button onClick={addTask}>Add Task</button>
			</div>

			<ol>
				{tasks.map(function (task, index) {
					return (
						<li key={index}>
							<span>{task}</span>
							<button onClick={() => deleteTask(index)}>Delete</button>
							<button onClick={() => moveTaskUp(index)}>Move UP 👆🏻</button>
							<button onClick={() => moveTaskDown(index)}>Move DOWN 👇🏻</button>
						</li>
					);
				})}
			</ol>
		</div>
	);
}

export default ToDoList;
