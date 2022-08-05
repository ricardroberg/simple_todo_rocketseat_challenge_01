import { v4 as uuid } from "uuid";

import "./global.css";
import styles from "./App.module.css";

import Header from "./components/Header";
import { Todo } from "./components/Todo";

const todoList = []

const todoList2 = [{
  key: '1',
  text: 'Learn React',
  completed: false,
  createdAt: new Date(),
  completedAt: ''
},
{
  key: '2',
  text: 'Learn Java',
  completed: false,
  createdAt: new Date(),
  completedAt: ''
},
{
  key: '3',
  text: 'Learn Python',
  completed: true,
  createdAt: new Date(),
  completedAt: '2021-09-01 20:40h'
},

]

interface TodoProps {
  id: string
  text: string;
  completed: boolean;
}


function App({ id, text, completed }: TodoProps) {

  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <Todo />
      </main>
    </div>
  )
}

export default App
