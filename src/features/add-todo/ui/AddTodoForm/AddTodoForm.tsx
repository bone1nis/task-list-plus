import './AddTodoForm.scss'
import { PlusIcon } from '@/shared/assets'
import { Button, Input } from '@/shared/ui'
import { useAddTodoForm } from '../../model/useAddTodoForm'

export interface AddTodoFormProps {
  onAdd: (text: string) => void
}

export const AddTodoForm = ({ onAdd }: AddTodoFormProps) => {
  const { text, error, onChange, onSubmit } = useAddTodoForm(onAdd)

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="add-form__row">
        <Input
          label="Новая задача"
          placeholder="Что нужно сделать?"
          value={text}
          error={error}
          autoComplete="off"
          onChange={onChange}
        />
        <Button type="submit">
          <PlusIcon width={18} height={18} />
          Добавить
        </Button>
      </div>
    </form>
  )
}
