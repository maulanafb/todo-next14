import Form from "../ui/Form"
import Input from "../ui/Input"
import Button from "../ui/Button"
import { create } from "@/app/actions/todoActions"

const AddTodo = () => {
  return (
      <Form action={create} className="w-1/2 m-auto">
          <div className="flex">
              <Input name="input" type="text" placeholder="AddTodo" />
              <Button  type="submit" text="add"/>
          </div>
    </Form>
  )
}

export default AddTodo