import { useState } from 'react'
import { validateTodoText } from '@/entities/todo'

export const useAddTodoForm = (onAdd: (text: string) => void) => {
  const [text, setText] = useState('')
  const [error, setError] = useState<string | null>(null)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
    setError(null)
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = validateTodoText(text)
    if (!result.ok) return setError(result.error)
    onAdd(result.value)
    setText('')
  }

  return { text, error, onChange, onSubmit }
}
