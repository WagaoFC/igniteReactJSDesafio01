import { useState } from 'react'
import { TaskCreated } from './Taskcreated'
import clipboard from '../assets/clipboard.svg'
import styles from './Tasks.module.css'

export function Tasks() {
    return (
        <div className={styles.container}>
            <div className={styles.counter}>
                <p className={styles.created}>Tarefas criadas</p>
                <span>0</span>
            </div>
            <div className={styles.counter}>
                <p>Concluídas</p>
                <span>0</span>
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
            <TaskCreated />
        </div >
    )
}