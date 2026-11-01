import { useState } from 'react'
import { validateTodoText } from '@/entities/todo'

export const useEditableText = (text: string, onSave: (value: string) => void) => {
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState(text)
  const [error, setError] = useState<string | null>(null)

  const start = () => {
    setDraft(text)
    setError(null)
    setIsEditing(true)
  }

  const cancel = () => setIsEditing(false)

  const save = () => {
    const result = validateTodoText(draft)
    if (!result.ok) return setError(result.error)
    if (result.value !== text) onSave(result.value)
    setIsEditing(false)
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDraft(event.target.value)
    setError(null)
  }

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') save()
    if (event.key === 'Escape') cancel()
  }

  return { isEditing, draft, error, start, cancel, onChange, onKeyDown }
}
