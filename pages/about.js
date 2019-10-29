import React from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import { BaseLayout } from '../components/BaseLayout'

export default function About() {
  return (
    <>
      <Head>
        <title>SouthBayDevs - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>
        <Navigation />
        <h1>About</h1>
      </BaseLayout>
    </>
  )
}
