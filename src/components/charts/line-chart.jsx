"use client"

import React from "react"
import { LineChart as RechartsLineChart, Line as RechartsLine, ResponsiveContainer, XAxis, YAxis } from "recharts"

export default function LineChart({ data, margin, children, className }) {
  return (
    <div className={className} style={{ width: '100%', minHeight: '300px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart data={data} margin={margin}>
          <XAxis 
            dataKey="date" 
            tickFormatter={(val) => {
              const date = new Date(val);
              return `${date.getDate()}/${date.getMonth()+1}`;
            }}
            stroke="#888888" 
            fontSize={12} 
            tickLine={false} 
            axisLine={false} 
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
          />
          {children}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  )
}

export function Line(props) {
  return <RechartsLine type="monotone" dot={false} {...props} />
}
