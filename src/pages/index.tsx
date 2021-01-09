import Head from 'next/head'
import Header from '../components/Header'
import Container from '../components/Container'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>mobile.cologne</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <Header mode="big" />
        <Hero />

        <Container>
          <h1 className="text-4xl font-extrabold text-gray">
            <span className="relative">
              Neues
              <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 14"
                className="absolute -bottom-2 left-0 w-full"
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
            {' aus Köln'}
          </h1>

          <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            <div>
              <div>
                <a href="#" className="inline-block">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    Article
                  </span>
                </a>
              </div>
              <a href="#" className="block mt-4">
                <p className="text-xl font-semibold text-gray-900">
                  Boost your conversion rate
                </p>
                <p className="mt-3 text-base text-gray-500">
                  Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.
                </p>
              </a>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <a href="#">
                    <span className="sr-only">Paul York</span>
                    <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <a href="#">
                      Paul York
                    </a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime="2020-03-16">
                      Mar 16, 2020
                    </time>
                    <span aria-hidden="true">
                      &middot;
                    </span>
                    <span>
                      6 min read
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <a href="#" className="inline-block">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
                    Video
                  </span>
                </a>
              </div>
              <a href="#" className="block mt-4">
                <p className="text-xl font-semibold text-gray-900">
                  How to use search engine optimization to drive sales
                </p>
                <p className="mt-3 text-base text-gray-500">
                  Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.
                </p>
              </a>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <a href="#">
                    <span className="sr-only">Dessie Ryan</span>
                    <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <a href="#">
                      Dessie Ryan
                    </a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime="2020-03-10">
                      Mar 10, 2020
                    </time>
                    <span aria-hidden="true">
                      &middot;
                    </span>
                    <span>
                      4 min read
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <a href="#" className="inline-block">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    Case Study
                  </span>
                </a>
              </div>
              <a href="#" className="block mt-4">
                <p className="text-xl font-semibold text-gray-900">
                  Improve your customer experience
                </p>
                <p className="mt-3 text-base text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.
                </p>
              </a>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <a href="#">
                    <span className="sr-only">Easer Collins</span>
                    <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <a href="#">
                      Easer Collins
                    </a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime="2020-02-12">
                      Feb 12, 2020
                    </time>
                    <span aria-hidden="true">
                      &middot;
                    </span>
                    <span>
                      11 min read
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
        <Footer />
      </>
    </>
  )
}
