import { TodoItem } from '@/entities/todo'
import type { Todo } from '@/entities/todo'
import { EditableTodoText } from '@/features/edit-todo'
import { DragHandle, useSortableRow } from '@/features/reorder-todos'

export interface TodoRowProps {
  todo: Todo
  onToggle: (id: string) => void
  onRemove: (id: string) => void
  onEdit: (id: string, text: string) => void
}

export const TodoRow = ({ todo, onToggle, onRemove, onEdit }: TodoRowProps) => {
  const { rowProps, handleProps } = useSortableRow(todo.id)

  return (
    <TodoItem
      todo={todo}
      onToggle={onToggle}
      onRemove={onRemove}
      leading={<DragHandle aria-label={`Перетащить задачу: ${todo.text}`} {...handleProps} />}
      {...rowProps}
    >
      <EditableTodoText
        text={todo.text}
        done={todo.completed}
        onSave={(text) => onEdit(todo.id, text)}
      />
    </TodoItem>
  )
}
