import React from 'react'
import Head from 'next/head'
import BaseLayout from '../components/BaseLayout'

export default function Index() {
  return (
    <div>
      <Head>
        <title>southbay devs</title>
      </Head>
      <BaseLayout>
        <div
          style={{
            display: 'flex',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '1rem'
          }}
        >
          <h1>We're setting up the first event</h1>
        </div>
      </BaseLayout>
    </div>
  )
}
