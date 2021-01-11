import Head from 'next/head'
import Layout from '../components/Layout'

export default function Jobs() {
  return (
    <>
      <Head>
        <title>mobile.cologne</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1 className="text-4xl font-extrabold text-gray">
          {'Apps '}
          <span className="relative">
            entwickelt
            <svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 14"
              className="absolute -bottom-4 left-0 w-full"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#e01f1f' }}></stop>
                  <stop offset="100%" style={{ stopColor: '#f0bfbf' }}></stop>
                </linearGradient>
              </defs>
              <path d="M 0 5 C 50 2, 80 2, 100 4"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3px"
                vector-effect="non-scaling-stroke"
                stroke="url(#gradient)"
              />
            </svg>
          </span>
          {' in Köln'}
        </h1>
      </Layout>
    </>
  )
}
