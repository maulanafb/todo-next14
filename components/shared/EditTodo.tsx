'use client'
import { edit } from '@/app/actions/todoActions'
import { TType } from '@/types/todoTypes'
import Form from '../ui/Form'
import Input from '../ui/Input'
import Button from '../ui/Button'
import { useState } from 'react'
import {BiEdit} from 'react-icons/bi'
import { Handlee } from 'next/font/google'
import { AiOutlineCloseCircle } from 'react-icons/ai'


const EditTodo = ({ todo }: TType) => {
    const [editTodo, setEditTodo] = useState(false)
    const handleEdit = () => {
        setEditTodo((editTodo)=> !editTodo)
    }

    const handleSubmit = () => { 
        setEditTodo(false)
    }
  return (
      <div className='flex gap-5 items-center'>
          <Button onClick={handleEdit} text={editTodo ?  <AiOutlineCloseCircle />: <BiEdit /> } actionButton />
          {editTodo ? (
            <Form action={edit} onSubmit={handleSubmit}>
                <Input name="inputId" value={todo.id} type='hidden' />
                  <div className='flex justify-center'>
                      <Input type='text' name='newTitle' placeholder='Edit Todo...' />
                      <Button type='submit' text='Save' />
                  </div>
            </Form>):''}
      </div>
      
  )
}

export default EditTodo