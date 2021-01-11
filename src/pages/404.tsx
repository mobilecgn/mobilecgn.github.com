import Head from 'next/head'

import Layout from '../components/Layout'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>mobile.cologne</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h2>404 - Page not found</h2>
      </Layout>
    </>
  )
}
