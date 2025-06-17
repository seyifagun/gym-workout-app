import React from 'react'
import Link from "next/link"

const Navbar = () => {
  return (
    <header>
        <div className="container">
            <Link href="/">
                <h1>Workout Agent</h1>
            </Link>
        </div>
    </header>
  )
}

export default Navbar