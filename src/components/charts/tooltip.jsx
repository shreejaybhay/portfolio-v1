"use client"
import { Tooltip } from "recharts"

export function ChartTooltip() {
  return (
    <Tooltip 
      contentStyle={{ 
        backgroundColor: 'var(--background)', 
        border: '1px solid var(--border)', 
        borderRadius: '8px',
        color: 'var(--foreground)'
      }} 
    />
  )
}
