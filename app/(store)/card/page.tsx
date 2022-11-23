"use client"
import { useContextStore } from "../../../hooks/useContextStore"
const page = () => {
  const {state} = useContextStore()
  return (
    <div className="card">{state}</div>
  )
}

export default page