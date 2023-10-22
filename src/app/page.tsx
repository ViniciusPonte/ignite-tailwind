import { SettingTabs } from '@/components/SettingsTabs'
import * as Input from '@/components/Input'
import { Mail, UploadCloud, User } from 'lucide-react'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingTabs />

      <div className="mt-6 flex flex-col ">
        <div className="flex items-center justify-between border-b border-zinc-300 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm font-medium text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
              type="button"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </div>
        <form
          id="settings"
          action=""
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid-cols-form grid gap-3">
            <label
              htmlFor="firstName"
              className="font-zinc-700 text-sm font-medium"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Vinicius" />
              </Input.Root>

              <Input.Root>
                <Input.Control defaultValue="Ponte" />
              </Input.Root>
            </div>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="email"
              className="font-zinc-700 text-sm font-medium"
            >
              E-mail address
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                type="email"
                id="email"
                defaultValue="viniciusbponte@gmail.com"
              />
            </Input.Root>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="photo"
              className="font-zinc-700 text-sm font-medium"
            >
              Your photo
              <p className="mt-0.5 text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </p>
            </label>
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 items-center justify-center  rounded-full bg-violet-50">
                <User className="h-8 w-8 text-violet-500" />
              </div>

              <label
                htmlFor="photo"
                className="hover:bg-violet-25 group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-200 hover:text-violet-500"
              >
                <div className="border-1.5 rounded-full border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100">
                  <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-violet-600" />
                </div>

                <div className="flex flex-col items-center gap-1">
                  <span className="text-sm">
                    <span className="font-semibold text-violet-700">
                      Click to upload
                    </span>{' '}
                    or drag and drop
                  </span>
                  <span className="text-xs">
                    SVG, PNG, JPG or GIF (max. 800x400px)
                  </span>
                </div>
              </label>
              <input type="file" className="sr-only" id="photo" />
            </div>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label htmlFor="role" className="font-zinc-700 text-sm font-medium">
              Role
            </label>
            <Input.Root>
              <Input.Control id="role" defaultValue="Developer" />
            </Input.Root>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="country"
              className="font-zinc-700 text-sm font-medium"
            >
              Country
            </label>
            <div></div>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="font-zinc-700 text-sm font-medium"
            >
              Timezone
            </label>
            <div></div>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label htmlFor="bio" className="font-zinc-700 text-sm font-medium">
              Bio
              <p className="mt-0.5 text-sm font-normal text-zinc-500">
                Write a short introduction.
              </p>
            </label>
            <div></div>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="portfolio"
              className="font-zinc-700 text-sm font-medium"
            >
              Portfolio projects
              <p className="mt-0.5 text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </p>
            </label>
            <div></div>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
              type="button"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
