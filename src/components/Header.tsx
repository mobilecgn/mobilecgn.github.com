import { useState } from 'react';
import { SkipNavLink } from "@reach/skip-nav";
import Link from 'next/link'
import { useRouter } from 'next/router'

import "@reach/skip-nav/styles.css";

import Logo from "./Logo";

const navItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    desktop: true,
    title: 'Apps',
    href: '/apps',
  },
  {
    desktop: true,
    title: 'Meetup',
    href: '/meetup',
  },
  {
    desktop: true,
    title: 'Jobs',
    href: '/jobs',
  },
  {
    desktop: true,
    title: 'Kontakt',
    href: '/kontakt',
  },
]

export default function Header({ mode }: { mode?: 'big' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(open => !open);

  const router = useRouter()

  const darkBackground = mode !== 'big';

  return (
    <nav className={
      darkBackground ?
      'bg-gradient-to-r from-red to-red-dark' :
      'bg-white'
    }>
      <SkipNavLink>Zum Inhalt springen</SkipNavLink>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            {router.asPath === '/' ? null : (
              <div className="absolute left-0">
                <Link href="/">
                  <a className="flex items-center">
                    <Logo
                      strokeWidth={1.5}
                      className={
                        darkBackground ?
                        'w-8 h-8 mr-2 bg-white text-red rounded-md inline-block transform hover:-rotate-6' :
                        ''
                      }
                    />
                    <span className={
                      darkBackground ?
                      'text-white font-semibold' :
                      'text-black font-semibold'
                    }>mobile.cologne</span>
                  </a>
                </Link>
              </div>
            )}
            <div className="hidden sm:flex flex-grow justify-center space-x-4">
              {
                navItems.filter(navItem => navItem.desktop).map((navItem) => (
                  <Link key={navItem.title} href={navItem.href}>
                    <a
                      className={router.asPath === navItem.href ?
                        darkBackground ?
                          'bg-red-dark text-white px-3 py-2 rounded-md text-sm font-medium' :
                          'bg-gray text-white px-3 py-2 rounded-md text-sm font-medium' :
                        darkBackground ?
                          'text-white hover:bg-red-dark px-3 py-2 rounded-md text-sm font-medium' :
                          'text-gray hover:bg-red hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                      }
                    >
                      {navItem.title}
                    </a>
                  </Link>
                ))
              }
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button onClick={toggleMenu} className={
              darkBackground ?
              'inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' :
              'inline-flex items-center justify-center p-2 rounded-md text-red focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red'
             }
              aria-expanded="false"
            >
              <span className="sr-only">{!menuOpen ? 'Open main menu' : 'Close main menu'}</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={!menuOpen ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={menuOpen ? 'block sm:hidden' : 'hidden sm:hidden'}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {
            navItems.map((navItem) => (
              <Link key={navItem.title} href={navItem.href}>
                <a
                  className={router.asPath === navItem.href ?
                    darkBackground ?
                      'bg-red-dark text-white block px-3 py-2 rounded-md text-base font-medium' :
                      'bg-white text-red block px-3 py-2 rounded-md text-base font-medium' :
                    darkBackground ?
                      'text-white hover:bg-gray hover:text-white block px-3 py-2 rounded-md text-base font-medium' :
                      'bg-white text-black hover:bg-gray hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                  }
                >
                  {navItem.title}
                </a>
              </Link>
            ))
          }
        </div>
      </div>
    </nav>
  )
}