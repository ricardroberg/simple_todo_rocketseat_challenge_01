import { ChangeEvent, FormEvent, useState } from 'react'

import { CheckSquare, ClipboardText, DiamondsFour, PlusCircle, Square, Trash } from 'phosphor-react'
import { v4 as uuid } from 'uuid'
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import styles from './Todo.module.css'

interface TodoProps {
  id: string
  text: string
  createdAt: Date
  isCompleted: boolean
}


export function Todo() {
  const [todos, setTodos] = useState<TodoProps[]>([])
  const [newTodo, setNewTodo] = useState('')

  const todoDateFormatted = format(
    new Date(),
    "dd' de 'LLLL' às 'HH:mm'h'",
    { locale: ptBR }
  );

  function createNewTodo(event: FormEvent) {
    event.preventDefault()

    const addTodo = {
      id: uuid(),
      text: newTodo,
      createdAt: new Date(),
      isCompleted: false
    }

    setTodos([...todos, addTodo])
    setNewTodo('')
  }

  // function handleChangeText(event: ChangeEvent<HTMLTextAreaElement>) {
  //   setNewTodo(event.target.value)
  // }

  function removeTodo(id: string) {
    const listTodo = todos.filter((todo) => todo.id !== id)
    setTodos(listTodo)

  }

  function isTodoComplete(id: string) {
    const todoState = todos.map((todo) =>
      todo.id === id
        ? {
          ...todo,
          isCompleted: !todo.isCompleted,
        }
        : todo
    )
    setTodos(todoState)
  }

  const completedTodos = todos.filter((todo) => todo.isCompleted).length

  return (
    <>
      <div className={styles.inputContainer}>
        <form className={styles.inputContainer} onSubmit={createNewTodo}>
          <input
            name='todo'
            placeholder='Add a new task'
            onChange={(event) => setNewTodo(event.target.value)}
            value={newTodo}
            required
          />
          <button type="submit" >
            <span>Add <PlusCircle size={'32px'} /></span>
          </button>
        </form>
      </div>
      <div className={styles.todoCount}>
        <span>Tarefas Criadas  <em>{todos.length}</em></span>
        <span>Concluidas <em>{completedTodos} of {todos.length}</em></span>
      </div>
      <div>
        {
          todos.length === 0 ?
            (
              <div className={styles.emptyTodo}>
                <span> <ClipboardText size={65} /></span><br />
                <p>Your ToDo list is empty!</p>
              </div>
            )
            :
            (<>
              {
                todos.map(todo => (
                  <div className={styles.listTodo} key={todo.id}>

                    <div className={styles.todoItem}>
                      <span>{todo.text}</span>
                      <Trash size={'1.5rem'} className={styles.trashIcon} onClick={() => removeTodo(todo.id)} />
                    </div>
                    <div className={styles.todoDate}>
                      <span >{todoDateFormatted}</span>
                      <span>
                        {!todo.isCompleted ?
                          (
                            <Square size={'1.5rem'}
                              className={styles.todoUncompleted}
                              onClick={() => isTodoComplete(todo.id)}

                            />
                          ) : (
                            <CheckSquare size={'1.5rem'}
                              className={styles.todoCompleted}
                              onClick={() => isTodoComplete(todo.id)}

                            />
                          )
                        }
                      </span>
                    </div>

                  </div>
                ))
              }
            </>)
        }
      </div>
    </>
  )
}

