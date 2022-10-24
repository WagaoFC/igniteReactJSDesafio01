import { Header } from './components/Header'
import { InputTask } from './components/InputTask'
import { Tasks } from './components/Tasks'
import styles from './App.module.css'
import './global.css'

export function App() {

    return (
        <div className={styles.wrapper}>
            <Header />
            <InputTask />
            <Tasks />
        </div>
    )
}