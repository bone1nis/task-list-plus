import type { Todo } from '@/entities/todo'
import { SortableList } from '@/features/reorder-todos'
import { TodoRow } from '../TodoRow'

export interface TodoBoardListProps {
  todos: Todo[]
  onReorder: (activeId: string, overId: string) => void
  onToggle: (id: string) => void
  onRemove: (id: string) => void
  onEdit: (id: string, text: string) => void
}

export const TodoBoardList = ({
  todos,
  onReorder,
  onToggle,
  onRemove,
  onEdit,
}: TodoBoardListProps) => (
  <SortableList ids={todos.map((t) => t.id)} onReorder={onReorder}>
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoRow
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
          onEdit={onEdit}
        />
      ))}
    </ul>
  </SortableList>
)
