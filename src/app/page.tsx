import { SettingTabs } from '@/components/SettingsTabs'
import * as Input from '@/components/Form/Input'
import * as FileInput from '@/components/Form/FileInput'

import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { Textarea } from '@/components/Form/Textarea'

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
          <div className="grid grid-cols-form gap-3">
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

          <div className="grid grid-cols-form gap-3 pt-5">
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

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="photo"
              className="font-zinc-700 text-sm font-medium"
            >
              Your photo
              <p className="mt-0.5 text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </p>
            </label>
            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="role" className="font-zinc-700 text-sm font-medium">
              Role
            </label>
            <Input.Root>
              <Input.Control id="role" defaultValue="Developer" />
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="country"
              className="font-zinc-700 text-sm font-medium"
            >
              Country
            </label>
            <Select placeholder="Select a country...">
              <SelectItem value="BR" text="Brazil" />
              <SelectItem value="US" text="United States" />
              <SelectItem value="CA" text="Canada" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="font-zinc-700 text-sm font-medium"
            >
              Timezone
            </label>
            <Select placeholder="Select a country...">
              <SelectItem
                value="pacific"
                text="Pacific Standard Time (UTC-08:00)"
              />
              <SelectItem value="utc" text="American São Paulo (UTC-03:00)" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="bio" className="font-zinc-700 text-sm font-medium">
              Bio
              <p className="mt-0.5 text-sm font-normal text-zinc-500">
                Write a short introduction.
              </p>
            </label>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem value="normal" text="Normal text" />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className="group rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Bold
                      className="h-4 w-4 text-zinc-500 group-hover:text-violet-600"
                      strokeWidth={3}
                    />
                  </button>
                  <button
                    type="button"
                    className="group rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Italic
                      className="h-4 w-4 text-zinc-500 group-hover:text-violet-600"
                      strokeWidth={3}
                    />
                  </button>
                  <button
                    type="button"
                    className="group rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Link
                      className="h-4 w-4 text-zinc-500 group-hover:text-violet-600"
                      strokeWidth={3}
                    />
                  </button>
                  <button
                    type="button"
                    className="group rounded-md p-2 hover:bg-zinc-50"
                  >
                    <List
                      className="h-4 w-4 text-zinc-500 group-hover:text-violet-600"
                      strokeWidth={3}
                    />
                  </button>
                  <button
                    type="button"
                    className="group rounded-md p-2 hover:bg-zinc-50"
                  >
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500 group-hover:text-violet-600"
                      strokeWidth={3}
                    />
                  </button>
                </div>
              </div>
              <Textarea id="bio" />
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="portfolio"
              className="font-zinc-700 text-sm font-medium"
            >
              Portfolio projects
              <p className="mt-0.5 text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </p>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.Control multiple />
              <FileInput.FileList />
            </FileInput.Root>
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
