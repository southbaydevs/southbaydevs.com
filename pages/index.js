import React from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import { BaseLayout } from '../components/BaseLayout'

const Home = () => (
  <>
    <Head>
      <title>SouthBayDevs</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <BaseLayout>
      <Navigation />
      <h1>SouthBayDevs</h1>
    </BaseLayout>
  </>
)

Home.title = 'SouthBayDevs'

export default Home
