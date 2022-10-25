import { CircleWavyCheck, Trash } from 'phosphor-react'
import { ITask } from '../App';
import styles from './TaskCreated.module.css'

interface Props {
    task: ITask;
}

export function TaskCreated({ task }: Props) {
    return (
        <div className={styles.containerTask}>
            <button>
                <CircleWavyCheck size={24} />
            </button>
            <p>{task.title}</p>
            <button>
                <Trash size={24} />
            </button>
        </div>
    )
}