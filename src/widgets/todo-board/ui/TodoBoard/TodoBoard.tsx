import './TodoBoard.scss'
import { ActiveCount } from '@/entities/todo'
import { AddTodoForm } from '@/features/add-todo'
import { ClearCompletedButton } from '@/features/clear-completed'
import { TodoFilter } from '@/features/filter-todos'
import { useTodoBoard } from '../../model/useTodoBoard'
import { TodoBoardEmpty } from '../TodoBoardEmpty'
import { TodoBoardList } from '../TodoBoardList'

export const TodoBoard = () => {
  const board = useTodoBoard()

  return (
    <section className="board" aria-label="Список задач">
      <AddTodoForm onAdd={board.add} />

      {board.hasTodos && (
        <div className="board__filter">
          <TodoFilter value={board.filter} onChange={board.setFilter} />
        </div>
      )}

      {board.visible.length === 0 ? (
        <TodoBoardEmpty filter={board.hasTodos ? board.filter : 'all'} />
      ) : (
        <TodoBoardList
          todos={board.visible}
          onReorder={board.reorder}
          onToggle={board.toggle}
          onRemove={board.remove}
          onEdit={board.edit}
        />
      )}

      {board.hasTodos && (
        <footer className="board__footer">
          <ActiveCount count={board.activeCount} />
          <ClearCompletedButton disabled={!board.hasCompleted} onClear={board.clearDone} />
        </footer>
      )}
    </section>
  )
}
