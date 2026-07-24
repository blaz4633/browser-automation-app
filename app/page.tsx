import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="flex min-h-svh items-start justify-end p-6">
      <div className="flex flex-col items-end gap-3">
        <UserButton />
        <OrganizationSwitcher />
      </div>
    </div>
  )
}
