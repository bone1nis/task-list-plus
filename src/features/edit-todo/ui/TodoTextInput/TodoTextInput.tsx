import { Input } from '@/shared/ui'

export interface TodoTextInputProps {
  value: string
  error: string | null
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown: (event: React.KeyboardEvent) => void
  onCancel: () => void
}

export const TodoTextInput = ({
  value,
  error,
  onChange,
  onKeyDown,
  onCancel,
}: TodoTextInputProps) => (
  <Input
    compact
    label="Редактировать задачу"
    value={value}
    error={error}
    autoFocus
    autoComplete="off"
    onChange={onChange}
    onKeyDown={onKeyDown}
    onBlur={onCancel}
  />
)
