import Form from "../ui/Form"
import Button from "../ui/Button"
import {AiOutlineCheckCircle} from 'react-icons/ai'
import Input from "../ui/Input"
import { changeStatus } from "@/app/actions/todoActions"
import { TType } from "@/types/todoTypes"

const ChangeTodo = ({ todo }:TType) => {

  return (
      <Form action={changeStatus}>
          <Input name="inputId" value={todo.id} type="hidden" />
          <Button actionButton type="submit" text={<AiOutlineCheckCircle />} />
    </Form>
  )
}

export default ChangeTodo