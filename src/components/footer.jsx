import styles from './footer.module.css'
export default function Footer({ todos }) {
    const completed = todos.filter(((todo) => todo.completed === true)).length
    const total = todos.length
    return (
        <div className={styles.footer}>
            <span className={styles.item}>Completed: {completed}</span>
            <span className={styles.item}>Total: {total}</span>
        </div>
    )
}