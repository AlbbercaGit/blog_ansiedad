import { cn } from "@/lib/utils"
import type React from "react"

interface RetroWindowProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  children: React.ReactNode
}

export function RetroWindow({ title, children, className, ...props }: RetroWindowProps) {
  return (
    <div
      className={cn(
        "border-2 border-retro-black bg-retro-white shadow-[4px_4px_0px_0px_#000000] flex flex-col w-full", // Añadido w-full, eliminado max-w-sm
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-between border-b-2 border-retro-black bg-retro-gray-light px-2 py-1">
        <div className="flex space-x-1">
          <span className="h-3 w-3 rounded-full border border-retro-black bg-retro-gray-medium" />
          <span className="h-3 w-3 rounded-full border border-retro-black bg-retro-gray-medium" />
          <span className="h-3 w-3 rounded-full border border-retro-black bg-retro-gray-medium" />
        </div>
        {title && <span className="text-xs font-bold uppercase">{title}</span>}
        <div className="w-9" /> {/* Spacer for alignment */}
      </div>
      <div className="flex-1 p-4 overflow-auto">{children}</div>
    </div>
  )
}
