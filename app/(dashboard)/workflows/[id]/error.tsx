"use client"

import { AlertCircleIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  return (
    <Empty className="min-h-svh border-none">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <AlertCircleIcon />
        </EmptyMedia>
        <EmptyTitle>Something went wrong</EmptyTitle>
        <EmptyDescription>
          {error.message || "Failed to load this workflow. Please try again."}
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button onClick={() => unstable_retry()}>Try again</Button>
      </EmptyContent>
    </Empty>
  )
}
