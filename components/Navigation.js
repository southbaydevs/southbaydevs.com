import React from 'react'
import Link from 'next/link'
import Logo from './Logo'

export default function Navigation() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '1rem'
      }}
    >
      <Logo />
      {/* <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Link href="/about" style={{ marginLeft: '1rem' }}>
          About
        </Link>
      </div> */}
    </div>
  )
}
