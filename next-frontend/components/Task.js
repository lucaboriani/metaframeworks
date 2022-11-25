const Task = ({task, styles, updateTask, editTask, deleteTask}) =>{

    return (
        <div className={styles.task_container}>
            <input
                type="checkbox"
                className={styles.check_box}
                checked={task.completed}
                onChange={() => updateTask(task._id)}
            />
            <p
                className={
                    task.completed
                        ? styles.task_text + " " + styles.line_through
                        : styles.task_text
                }
            >
                {task.task}
            </p>
            <button
                onClick={() => editTask(task._id)}
                className={styles.edit_task}
            >
                &#9998;
            </button>
            <button
                onClick={() => deleteTask(task._id)}
                className={styles.remove_task}
            >
                &#10006;
            </button>
        </div>
    )
}

export default Task