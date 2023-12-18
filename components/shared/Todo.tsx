import React from 'react'
import ChangeTodo from './ChangeTodo'
import { TType } from '@/types/todoTypes'
import EditTodo from './EditTodo'
import DeleteTodo from './DeleteTodo'


const Todo = ({ todo }:TType) => {

  return (
      <div  className={`w-full flex items-center justify-between bg-white py-3 px-20 rounded-2xl ${todo.isCompleted && 'line-through opacity-50'}`}>
          <ChangeTodo todo={todo} />
          <span className='text-center font-bold uppercase '>{todo.title}</span>
          <div className='flex items-center gap-4'>
              <EditTodo todo={todo} />
              <DeleteTodo todo={todo} />
          </div>
      </div>
  )
}

export default Todo