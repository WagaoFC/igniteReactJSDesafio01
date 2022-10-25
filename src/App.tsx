import { useState } from 'react'
import { Header } from './components/Header'
import { InputTask } from './components/InputTask'
import { Tasks } from './components/Tasks'
import styles from './App.module.css'
import './global.css'

export interface ITask {
    id: string;
    title: string;
    isCompleted: boolean;
}

export function App() {
    const [task, setTasks] = useState<ITask[]>([
        {
            id: 'teste',
            title: 'teste',
            isCompleted: true,
        },
        {
            id: 'teste',
            title: 'testefalse',
            isCompleted: false,
        }
    ])

    function addTask(taskTitle: string) {
        setTasks([
            ...task,
            {
                id: crypto.randomUUID(),
                title: taskTitle,
                isCompleted: false
            }
        ])
    }

    return (
        <div className={styles.wrapper}>
            <Header />
            <InputTask onAddTask={addTask} />
            <Tasks tasks={task} />
        </div>
    )
}