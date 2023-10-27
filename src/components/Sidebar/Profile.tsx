import { LogOut } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <Image
        src="https://github.com/ViniciusPonte.png"
        alt="Imagem do Github"
        className="h-10 w-10 rounded-full"
        width={40}
        height={40}
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Vinicius Ponte
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          viniciusbponte@gmail.com
        </span>
      </div>
      <Button variant="ghost" type="button">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
