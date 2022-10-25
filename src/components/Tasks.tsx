import { useState } from 'react'
import { TaskCreated } from './TaskCreated'
import clipboard from '../assets/clipboard.svg'
import styles from './Tasks.module.css'
import { ITask } from '../App'

interface Props {
    tasks: ITask[]
}

export function Tasks({ tasks }: Props) {
    const tasksQuantity = tasks.length
    const completedTasks = tasks.filter(task => task.isCompleted).length

    return (
        <div className={styles.container}>
            <div className={styles.counter}>
                <p className={styles.created}>Tarefas criadas</p>
                <span>{tasksQuantity}</span>
            </div>
            <div className={styles.counter}>
                <p>Concluídas</p>
                <span>{completedTasks} de {tasksQuantity}</span>
            </div>
            {/* <img src={clipboard} alt="Ícone clipboard" />
            <div className={styles.text}>
                <span>
                    <p>
                        Você ainda não tem tarefas cadastradas
                    </p>
                    <br />
                    <p>
                        Crie tarefas e organize seus itens a fazer
                    </p>
                </span>
            </div> */}
            <div className={styles.list}>
                {tasks.map(task => {
                    return (
                        <TaskCreated key={task.id} task={task} />
                    )
                })}
            </div>
        </div >
    )
}