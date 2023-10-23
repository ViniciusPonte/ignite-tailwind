'use client'
import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './Root'

export type ControlProps = ComponentProps<'input'>

export function Control({ multiple = false, ...props }: ControlProps) {
  const { id, onSelectFiles } = useFileInput()

  function handleFilesSelect(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return
    }

    const files = Array.from(event.target.files)

    onSelectFiles(files, multiple)
  }

  return (
    <input
      type="file"
      onChange={handleFilesSelect}
      className="sr-only"
      id={id}
      multiple={multiple}
      {...props}
    />
  )
}
