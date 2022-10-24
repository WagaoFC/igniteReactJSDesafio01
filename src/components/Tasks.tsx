import styles from './Tasks.module.css'
import clipboard from '../assets/clipboard.svg'

export function Tasks() {
    return (
        <div className={styles.container}>
            <div className={styles.counter}>
                <p>Tarefas criadas</p>
                <span>0</span>
            </div>
            <div className={styles.counter}>
                <p>Concluídas</p>
                <span>0</span>
            </div>
            <img src={clipboard} alt="Ícone clipboard" />
            <div className={styles.text}>
                <p>
                    Você ainda não tem tarefas cadastradas
                    <br />
                    <p>
                        Crie tarefas e organize seus itens a fazer
                    </p>
                </p>
            </div>
        </div >
    )
}