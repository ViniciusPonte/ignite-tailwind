import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type InputControlProps = ComponentProps<'input'>

export function InputControl(props: InputControlProps) {
  return (
    <input
      type="text"
      className={twMerge(
        'flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none',
        'dark:text-zinc-100 dark:placeholder-zinc-400',
      )}
      {...props}
    />
  )
}
