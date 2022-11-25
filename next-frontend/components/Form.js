const Form = ({task, styles, addTask, handleChange }) => {

    return (
        <form onSubmit={addTask} className={styles.form_container}>
            <input
                className={styles.input}
                type="text"
                placeholder="Task to be done..."
                onChange={handleChange}
                value={task.task}
            />
            <button type="submit" className={styles.submit_btn}>
                {task._id ? "Update" : "Add"}
            </button>
        </form>
    )
}

export default Form