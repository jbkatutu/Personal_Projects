import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef((props, ref) => (
  <div ref={ref} className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", props.className)} {...props} />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef((props, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", props.className)} {...props} />
))
const CardTitle = React.forwardRef((props, ref) => (
  <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", props.className)} {...props} />
))
const CardContent = React.forwardRef((props, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", props.className)} {...props} />
))
const CardFooter = React.forwardRef((props, ref) => (
  <div ref={ref} className={cn("flex items-center p-6 pt-0", props.className)} {...props} />
))

export { Card, CardHeader, CardTitle, CardContent, CardFooter }
