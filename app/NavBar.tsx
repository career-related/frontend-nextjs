"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { MdWork } from 'react-icons/md'
import classNames from 'classnames';
import { Flex } from '@radix-ui/themes';

const NavBar = () => {
  return (
    <nav className='border-b mb-5 px-5 py-3'>
      <Flex align="center" gap="3">
        <Link href="/">
          <MdWork />
        </Link>
        <NavLinks />
      </Flex>
    </nav>
  )
}

const NavLinks = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Home", href: "/"},
    { label: "Company", href: "/company"},
  ]
  return (
    <ul className='flex space-x-6'>
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href}
            className={
              classNames({
                "nav-link": true,
                "!text-zinc-900": link.href === currentPath,
              })
            }
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default NavBar