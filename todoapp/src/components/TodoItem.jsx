import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleCheck(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  const className = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.grandparentContainer}>
        <div className={styles.itemName}>
          <span className={className}>{item.name}</span>
        </div>
        <div className={styles.buttonContainer}>
          <button
            onClick={() => handleCheck(item.name)}
            className={styles.checkButton}
          >
            {item.done ? "Uncheck" : "Check"}
          </button>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </div>
      </div>
      <hr className={styles.line}></hr>
    </div>
  );
}
