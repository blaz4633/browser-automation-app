import { UserButton } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="flex min-h-svh items-start justify-end p-6">
      <UserButton />
    </div>
  )
}
