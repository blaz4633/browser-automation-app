import { WorkflowIcon } from "lucide-react"

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export default function NotFound() {
  return (
    <Empty className="min-h-svh border-none">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <WorkflowIcon />
        </EmptyMedia>
        <EmptyTitle>Workflow not found</EmptyTitle>
        <EmptyDescription>
          This workflow does not exist or you do not have access to it.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}
