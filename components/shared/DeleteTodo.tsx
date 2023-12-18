'use client'
import { TType } from '@/types/todoTypes'
import React from 'react'
import Button from '../ui/Button'
import Input from '../ui/Input'
import Form from '../ui/Form'
import { deleteTodo } from '@/app/actions/todoActions'
import {BsFillTrashFill} from 'react-icons/bs'

const DeleteTodo = ({todo}:TType) => {
  return (
      <Form action={deleteTodo}>
          <Input type="hidden" name='inputId' value={todo.id} />
          <Button actionButton text={<BsFillTrashFill/>} type='submit'/>
    </Form>
  )
}

export default DeleteTodo