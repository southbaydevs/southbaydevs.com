import React from 'react'
import Head from 'next/head'
import BaseLayout from '../components/BaseLayout'

export default function About() {
  return (
    <div>
      <Head>
        <title>SouthBay Devs - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>
        <h1>About</h1>
      </BaseLayout>
    </div>
  )
}
