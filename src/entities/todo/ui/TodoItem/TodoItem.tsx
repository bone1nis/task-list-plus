import './TodoItem.scss'
import type { LiHTMLAttributes, ReactNode } from 'react'
import { cn, useExitAnimation } from '@/shared/lib'
import { TrashIcon } from '@/shared/assets'
import { Button, Checkbox } from '@/shared/ui'
import type { Todo } from '../../model/types'

export interface TodoItemProps extends Omit<
  LiHTMLAttributes<HTMLLIElement>,
  'children' | 'onToggle'
> {
  todo: Todo
  onToggle: (id: string) => void
  onRemove: (id: string) => void
  leading?: ReactNode
  children: ReactNode
}

export const TodoItem = ({
  todo,
  onToggle,
  onRemove,
  leading,
  children,
  className,
  ...rest
}: TodoItemProps) => {
  const { isLeaving, startExit, onAnimationEnd } = useExitAnimation(() => onRemove(todo.id))

  return (
    <li
      className={cn('todo', isLeaving && 'todo--leaving', className)}
      {...rest}
      onAnimationEnd={onAnimationEnd}
    >
      {leading}
      <Checkbox
        label={`Отметить выполненной: ${todo.text}`}
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      {children}
      <Button
        variant="danger"
        className="todo__remove"
        aria-label={`Удалить задачу: ${todo.text}`}
        disabled={isLeaving}
        onClick={startExit}
      >
        <TrashIcon width={18} height={18} />
      </Button>
    </li>
  )
}
