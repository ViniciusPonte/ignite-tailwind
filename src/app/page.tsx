import { SettingTabs } from '@/components/SettingsTabs'
import * as Input from '@/components/Form/Input'
import * as FileInput from '@/components/Form/FileInput'

import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { Textarea } from '@/components/Form/Textarea'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Settings
      </h1>

      <SettingTabs />

      <div className="mt-6 flex flex-col ">
        <div className="flex flex-col justify-between gap-4 border-b border-zinc-300 pb-5 dark:border-zinc-700 lg:flex-row lg:items-center">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Personal info
            </h2>
            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button type="submit" form="settings">
              Save
            </Button>
          </div>
        </div>
        <form
          id="settings"
          action=""
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
        >
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label
              htmlFor="firstName"
              className="font-zinc-700 text-sm font-medium dark:text-zinc-300"
            >
              Name
            </label>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-form">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Vinicius" />
              </Input.Root>

              <div className="flex flex-col gap-3 lg:block">
                <label
                  htmlFor="lastName"
                  className="font-zinc-700 text-sm font-medium lg:sr-only"
                >
                  Last name
                </label>

                <Input.Root>
                  <Input.Control id="lastName" defaultValue="Ponte" />
                </Input.Root>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="email"
              className="font-zinc-700 text-sm font-medium dark:text-zinc-300"
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

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="photo"
              className="font-zinc-700 text-sm font-medium dark:text-zinc-300"
            >
              Your photo
              <p className="mt-0.5 text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </p>
            </label>
            <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="role"
              className="font-zinc-700 text-sm font-medium dark:text-zinc-300"
            >
              Role
            </label>
            <Input.Root>
              <Input.Control id="role" defaultValue="Developer" />
            </Input.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="country"
              className="font-zinc-700 text-sm font-medium dark:text-zinc-300"
            >
              Country
            </label>
            <Select placeholder="Select a country...">
              <SelectItem value="BR" text="Brazil" />
              <SelectItem value="US" text="United States" />
              <SelectItem value="CA" text="Canada" />
            </Select>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="timezone"
              className="font-zinc-700 text-sm font-medium dark:text-zinc-300"
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

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="bio"
              className="font-zinc-700 text-sm font-medium dark:text-zinc-300"
            >
              Bio
              <p className="mt-0.5 text-sm font-normal text-zinc-500">
                Write a short introduction.
              </p>
            </label>
            <div className="space-y-3">
              <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem value="normal" text="Normal text" />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <Button variant="ghost" type="button">
                    <Bold
                      className="h-4 w-4 text-zinc-500 group-hover:text-violet-600"
                      strokeWidth={3}
                    />
                  </Button>
                  <Button variant="ghost" type="button">
                    <Italic
                      className="h-4 w-4 text-zinc-500 group-hover:text-violet-600"
                      strokeWidth={3}
                    />
                  </Button>
                  <Button variant="ghost" type="button">
                    <Link
                      className="h-4 w-4 text-zinc-500 group-hover:text-violet-600"
                      strokeWidth={3}
                    />
                  </Button>
                  <Button variant="ghost" type="button">
                    <List
                      className="h-4 w-4 text-zinc-500 group-hover:text-violet-600"
                      strokeWidth={3}
                    />
                  </Button>
                  <Button variant="ghost" type="button">
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500 group-hover:text-violet-600"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>
              <Textarea id="bio" />
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="portfolio"
              className="font-zinc-700 text-sm font-medium dark:text-zinc-300"
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
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>
    </>
  )
}
