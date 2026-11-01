import './HomePage.scss'
import { ThemeToggle } from '@/features/toggle-theme'
import { TodoBoard } from '@/widgets/todo-board'

export const HomePage = () => {
  return (
    <main className="page">
      <header className="page__header">
        <div>
          <h1 className="page__title">Мои задачи</h1>
        </div>
        <ThemeToggle />
      </header>
      <TodoBoard />
    </main>
  )
}
