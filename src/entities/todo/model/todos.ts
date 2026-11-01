import type { Todo } from './types'

export const createTodo = (text: string, now: number = Date.now()): Todo => {
  return { id: crypto.randomUUID(), text, completed: false, createdAt: now }
}

export const addTodo = (todos: readonly Todo[], todo: Todo): Todo[] => {
  return [todo, ...todos]
}

export const toggleTodo = (todos: readonly Todo[], id: string): Todo[] => {
  return todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
}

export const removeTodo = (todos: readonly Todo[], id: string): Todo[] => {
  return todos.filter((t) => t.id !== id)
}

export const clearCompleted = (todos: readonly Todo[]): Todo[] => {
  return todos.filter((t) => !t.completed)
}

export const countActive = (todos: readonly Todo[]): number => {
  return todos.reduce((n, t) => (t.completed ? n : n + 1), 0)
}

export const updateTodoText = (todos: readonly Todo[], id: string, text: string): Todo[] => {
  return todos.map((t) => (t.id === id ? { ...t, text } : t))
}

export const moveTodo = (todos: readonly Todo[], activeId: string, overId: string): Todo[] => {
  const from = todos.findIndex((t) => t.id === activeId)
  const to = todos.findIndex((t) => t.id === overId)
  const next = [...todos]
  if (from === -1 || to === -1) return next
  const [moved] = next.splice(from, 1)
  next.splice(to, 0, moved)
  return next
}
