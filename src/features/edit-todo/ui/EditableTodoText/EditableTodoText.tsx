import './EditableTodoText.scss'
import { useEditableText } from '../../model/useEditableText'
import { TodoTextInput } from '../TodoTextInput'
import { TodoTextView } from '../TodoTextView'

export interface EditableTodoTextProps {
  text: string
  done: boolean
  onSave: (value: string) => void
}

export const EditableTodoText = ({ text, done, onSave }: EditableTodoTextProps) => {
  const edit = useEditableText(text, onSave)

  return (
    <div className="editable">
      {edit.isEditing ? (
        <TodoTextInput
          value={edit.draft}
          error={edit.error}
          onChange={edit.onChange}
          onKeyDown={edit.onKeyDown}
          onCancel={edit.cancel}
        />
      ) : (
        <TodoTextView text={text} done={done} onEdit={edit.start} />
      )}
    </div>
  )
}
