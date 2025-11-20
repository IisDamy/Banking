"use client"
import { sidebarLinks } from '@/constants';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { it } from 'node:test';


const SideBar = ({user}:SidebarProps): JSX.Element => {


return (
<aside className='sidebar max-sm:hidden'> 
    <nav className='flex flex-col gap-4'>
        <Link href={'./'} className='mb-12 cursor-pointer
        items-center gap-2' >
            <Image src={'/icons/logo.svg'} alt='Site Name' width={32} height={32}/>
        </Link>
       {sidebarLinks.map((item)=>{
        const pathName = usePathname()
        const isActive = ()=>{
           return (pathName===item.route || pathName.startsWith(`${item.route}`))
            }
            console.log(isActive())
        return (
        <Link href={item.route} className='' key={item.label}>
            <p className={cn( 'sidebar-link',{"bg-bank-gradient":isActive()})}>{item.label}</p>
        </Link>)
       })} 
    </nav>
</aside>

);}

export default SideBar