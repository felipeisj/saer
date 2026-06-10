"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

function Sheet({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="sheet" {...props}>{children}</div>
}

function SheetContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div data-slot="sheet-content" className={cn("fixed inset-y-0 right-0 w-3/4 bg-background shadow-lg border-l", className)} {...props}>
      {children}
    </div>
  )
}

function SheetHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="sheet-header" className={cn("flex flex-col gap-0.5 p-4", className)} {...props} />
}

function SheetTitle({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="sheet-title" className={cn("text-base font-medium", className)} {...props} />
}

function SheetDescription({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="sheet-description" className={cn("text-sm text-muted-foreground", className)} {...props} />
}

export { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription }
