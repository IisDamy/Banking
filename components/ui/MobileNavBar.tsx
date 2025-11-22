"use client"
import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import { Button } from './button'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'


const MobileNavBar = ({user}:MobileNavProps) => {
  return (
    <div className='p-4  '>
        <Sheet >
      <SheetTrigger asChild className='cursor-pointer'>
        <Image src={'/icons/hamburger.svg'} alt='' height={16}
        width={16}/>
      </SheetTrigger>

      <SheetContent className='hidden max-sm:flex' >
      <Link href={'/'}>
        <h1 className='text-26 font-ibm-plex-serif font-bold
      text-black-1'>
        Horizon
      </h1>
        
      </Link>
        <div className='flex flex-col gap-4'>
            {sidebarLinks.map((item)=>{
        const pathName = usePathname()
        const isActive = ()=>{
           return (pathName===item.route || pathName.startsWith(`${item.route}`))
            }
            console.log(isActive())
        return (
        <Link href={item.route}  key={item.label} >
          <div className={cn('relative size-6 w-full ', {"brightness-[3] bg-bank-gradient":isActive()})}>
            <Image src={item.imgURL} fill  alt=''
             className={''}/>
          </div>
            
       
        </Link>)
       })} 
        </div>
          <div>
            dsds
          </div>
      </SheetContent>
      <SheetClose asChild>
        
      </SheetClose>
    </Sheet>
    </div>
  )
}

export default MobileNavBar