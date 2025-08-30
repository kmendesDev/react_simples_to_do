import styles from './TodoItem.module.css';
export default function TodoItem({ id, item, completed, setTodos, todos }) {
    function handleDelete(item_id) {
        setTodos(todos.filter((todo) => todo.id !== item_id))
    }
    function handleClick() {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

    const itemClassName = completed ? styles.completed : "";
    return (
        <div>
            <div className={styles.item}>
                <div onClick={handleClick} className={styles.nameItem}>
                    <span className={itemClassName}>{item}</span>
                </div>
                <button onClick={() => handleDelete(id)} className={styles.deleteBtn}>x</button>
                <hr className={styles.line} />
            </div>
        </div>
    )
}