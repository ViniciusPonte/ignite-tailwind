'use client'
import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

type FileInputContextType = {
  id: string
  files: File[]
  onSelectFiles: (files: File[], multiple: boolean) => void
}

const FileInputContext = createContext({} as FileInputContextType)

export type RootProps = ComponentProps<'div'>

export function Root(props: RootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  function onSelectFiles(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((state) => [...state, ...files])
    }
    setFiles(files)
  }

  return (
    <FileInputContext.Provider value={{ id, files, onSelectFiles }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
