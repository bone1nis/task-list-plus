import { BroomIcon } from '@/shared/assets'
import { Button } from '@/shared/ui'

export interface ClearCompletedButtonProps {
  disabled: boolean
  onClear: () => void
}

export const ClearCompletedButton = ({ disabled, onClear }: ClearCompletedButtonProps) => {
  return (
    <Button variant="ghost" disabled={disabled} onClick={onClear}>
      <BroomIcon width={16} height={16} />
      Очистить выполненные
    </Button>
  )
}
