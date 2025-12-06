"use client"
import { sidebarLinks } from '@/constants';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { redirect, usePathname, useRouter} from 'next/navigation';
import { it } from 'node:test';
import { signOut } from '@/lib/Server/ACTIONS/user.actions';
import { Award } from 'lucide-react';



const SideBar = ({user}:SidebarProps): JSX.Element => {
const router = useRouter()
const onHandleClick =async () =>{
    try{
    await signOut()
   router.push('/sign-in')
    }
    catch(error){

    }
    
}

return (
<aside className='flex flex-col p-2 max-sm:hidden h-screen bg-green-300 justify-between sidebar'> 
    <nav className={cn('flex flex-col gap-4 text-black-1')}>
        <Link href={'./'} className='mb-12 cursor-pointer
        items-center gap-2' >
            <Image src={'/icons/logo.svg'} alt='Site Name' width={32} height={32}/>
        </Link>
        <div className='text-center gap-2 flex flex-col'>
            {sidebarLinks.map((item)=>{
        const pathName = usePathname()
        const isActive = ()=>{
           return (pathName===item.route || pathName.startsWith(`${item.route}`))
            }
        return (
        <Link href={item.route} className='' key={item.label}>
            <p className={cn( 'sidebar-link text-black-1 font-bold',{"text-white bg-bank-gradient":isActive()})}>{item.label}</p>
        </Link>)
       })} 
        </div>
    </nav>
     <footer className='self-start'>
           
            <button onClick={onHandleClick} >
                Log out
            </button>
    </footer>
</aside>

);}

export default SideBar