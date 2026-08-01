"use client"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

import { Canvas } from "./canvas"
import { RightSidebar } from "./right-sidebar"

export function WorkflowShell({ workflowId }: { workflowId: string }) {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="size-full"
      id={workflowId}
    >
      <ResizablePanel minSize="30rem">
        <ResizablePanelGroup orientation="vertical" className="size-full">
          <ResizablePanel minSize="18rem">
            <Canvas />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize="8rem" minSize="6rem">
            <div className="size-full p-4">Logs</div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="16rem" minSize="14rem" maxSize="36rem">
        <RightSidebar workflowId={workflowId} />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
