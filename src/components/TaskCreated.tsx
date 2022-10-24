import { CircleWavyCheck, Trash } from 'phosphor-react'
import styles from './TaskCreated.module.css'

export function TaskCreated() {
    return (
        <div className={styles.containerTask}>
            <button>
                <CircleWavyCheck size={24} weight="thin" />
            </button>
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <button>
                <Trash size={24} weight="thin" />
            </button>
        </div>
    )
}