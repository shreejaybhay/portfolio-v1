"use client"
import { CartesianGrid } from "recharts"

export default function Grid({ horizontal, vertical }) {
  return <CartesianGrid strokeDasharray="3 3" horizontal={horizontal} vertical={vertical} stroke="rgba(150,150,150,0.2)" />
}
