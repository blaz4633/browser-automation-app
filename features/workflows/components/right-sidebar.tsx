"use client"

import { useState, useTransition } from "react"
import { PlayIcon } from "lucide-react"
import { useRealtimeRun } from "@trigger.dev/react-hooks"

import { Button } from "@/components/ui/button"
import { runWorkflowAction } from "@/features/workflows/actions"
import type { helloWorldTask } from "@/trigger/example"

export function RightSidebar() {
  const [isPending, startTransition] = useTransition()
  const [runHandle, setRunHandle] = useState<{
    id: string
    publicAccessToken: string
  } | null>(null)

  const { run, error } = useRealtimeRun<typeof helloWorldTask>(runHandle?.id, {
    accessToken: runHandle?.publicAccessToken,
    enabled: !!runHandle,
  })

  const handleRun = () => {
    startTransition(async () => {
      const { handle } = await runWorkflowAction()
      setRunHandle(handle)
    })
  }

  return (
    <div className="flex size-full flex-col gap-4 p-4">
      <Button onClick={handleRun} disabled={isPending}>
        <PlayIcon data-icon="inline-start" />
        Run
      </Button>

      {error ? (
        <p className="text-sm text-destructive">{error.message}</p>
      ) : null}

      {run ? (
        <div className="space-y-1 text-sm">
          <p>Status: {run.status}</p>
          {run.output?.message ? <p>{run.output.message}</p> : null}
        </div>
      ) : null}
    </div>
  )
}
