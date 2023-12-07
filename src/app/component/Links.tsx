'use client' // Error components must be Client Components
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const Links = () => {
  const pathname = usePathname()
  const router = useRouter()
  return (
    <div>
      <Link className={pathname === "/" ? "text-pink-500": ""} href={"/dashboard"}>Dashboard</Link>
      <button type="button" onClick={() => router.push("/dashboard")}> Dashboard2</button>
    </div>
  )
}

export default Links
