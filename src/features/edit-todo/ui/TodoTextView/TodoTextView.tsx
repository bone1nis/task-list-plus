import './TodoTextView.scss'
import { PencilIcon } from '@/shared/assets'
import { cn } from '@/shared/lib'
import { Button } from '@/shared/ui'

export interface TodoTextViewProps {
  text: string
  done: boolean
  onEdit: () => void
}

export const TodoTextView = ({ text, done, onEdit }: TodoTextViewProps) => (
  <>
    <span className={cn('todo-text', done && 'todo-text--done')} onDoubleClick={onEdit}>
      {text}
    </span>
    <Button
      variant="icon"
      className="todo-text__edit"
      aria-label={`Редактировать задачу: ${text}`}
      onClick={onEdit}
    >
      <PencilIcon width={16} height={16} />
    </Button>
  </>
)
