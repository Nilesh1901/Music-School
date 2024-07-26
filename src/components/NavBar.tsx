"use client"
import { HoveredLink, Menu, MenuItem, ProductItem } from './ui/navbar-menu';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useState } from 'react';
import coursesImg from '../../public/All-Courses.svg'

function NavBar({className}:{className?:string}) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 px-2 md:px-0 ", className)} >
      <Menu setActive={setActive}>
        <Link href={'/'}>
        <MenuItem setActive={setActive} active={active} item='Home'></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item='Our Courses'>
          <div className='text-sm p-2'>
            <ProductItem title='All Courses' href='/courses' src={coursesImg} description='View all aur latest released courses'/>
            
          </div>
        </MenuItem>
        <Link href={'/contact'}>
        <MenuItem setActive={setActive} active={active} item='Contact Us'></MenuItem>
        </Link>
      </Menu>
    </div>
  )
}

export default NavBar