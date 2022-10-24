import styles from './InputTask.module.css'

export function InputTask() {
    return (
        <input
            className={styles.inputTask}
            type="text"
            placeholder='Adicione uma nova tarefa'
        />
    )
}