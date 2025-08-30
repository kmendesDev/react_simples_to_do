import styles from './TodoList.module.css';
import TodoItem from './TodoItem';

export default function TodoList({ setTodos, todos }) {
    return (
        <div className={styles.list}>
            {todos.map((item) => (
                <TodoItem key={item.id} id={item.id} item={item.text} completed={item.completed} setTodos={setTodos} todos={todos} />
            ))}
        </div>
    )
}