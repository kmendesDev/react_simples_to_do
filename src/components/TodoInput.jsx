import styles from './TodoInput.module.css';
import { useState } from 'react';

export default function TodoInput({ setTodos, todos }) {
    const [todo, setTodo] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        handleClick();
        setTodo("");
    }
    function handleChange(value) {
        setTodo(value);
    }
    function handleClick() {
        if (todo.trim() !== "") {
            const newTodo = { id: Date.now(), text: todo, completed: false };
            setTodos([...todos, newTodo]);
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit} className={styles.todoForm}>
                <input className={styles.inputForm} value={todo} onChange={(e) => { handleChange(e.target.value) }} type="text" placeholder="Type your To-Do" ></input>
                <button className={styles.buttonForm} type="submit">Add</button>
            </form>
        </>
    )
}