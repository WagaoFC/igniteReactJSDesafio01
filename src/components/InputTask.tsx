import { PlusCircle } from 'phosphor-react'
import styles from './InputTask.module.css'

export function InputTask() {
    return (
        <div className={styles.container}>
            <input
                className={styles.inputTask}
                type="text"
                placeholder='Adicione uma nova tarefa'
            />
            <button className={styles.buttonAddTask}>
                Criar <PlusCircle />
            </button>
        </div>
    )
}