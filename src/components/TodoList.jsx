import styles from './TodoList.module.css';
import TodoItem from './TodoItem';

export default function TodoList({ setTodos, todos }) {

    const sortedTodos = todos.slice().sort((a, b) => Number(a.completed) - Number(b.completed));
    return (
        <div className={styles.list}>
            {sortedTodos.map((item) => (
                <TodoItem key={item.id} id={item.id} item={item.text} completed={item.completed} setTodos={setTodos} todos={todos} />
            ))}
        </div>
    )
}