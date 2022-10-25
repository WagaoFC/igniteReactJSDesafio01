import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './InputTask.module.css'

interface Props {
    onAddTask: (taskTitle: string) => void;
}

export function InputTask({ onAddTask }: Props) {
    const [title, setTitle] = useState('');

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        onAddTask(title);
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }

    return (
        <div className={styles.container}>
            <input
                className={styles.inputTask}
                type="text"
                placeholder='Adicione uma nova tarefa'
                onChange={onChangeTitle}
                value={title}
            />
            <button className={styles.buttonAddTask} onSubmit={handleSubmit}>
                Criar <PlusCircle />
            </button>
        </div>
    )
}