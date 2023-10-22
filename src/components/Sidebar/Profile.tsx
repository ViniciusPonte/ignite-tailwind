import { LogOut } from 'lucide-react'
import Image from 'next/image'

export function Profile() {
  return (
    <div className="grid-cols-profile grid items-center gap-3">
      <Image
        src="https://github.com/ViniciusPonte.png"
        alt="Imagem do Github"
        className="h-10 w-10 rounded-full"
        width={40}
        height={40}
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Vinicius Ponte
        </span>
        <span className="truncate text-sm text-zinc-500">
          viniciusbponte@gmail.com
        </span>
      </div>
      <button
        type="button"
        className="group ml-auto rounded-md p-2 hover:bg-zinc-50"
      >
        <LogOut className="h-5 w-5 text-zinc-500 group-hover:text-violet-600" />
      </button>
    </div>
  )
}
