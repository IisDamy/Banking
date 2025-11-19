import { sidebarLinks } from '@/constants';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const SideBar = ({user}:SidebarProps): JSX.Element => { 
return (
<aside className='sidebar'>
    <Link href={'./'}>
        <Image src={''} alt=''/>
        <p></p>
     
    </Link>
    <nav>
       {sidebarLinks.map((item)=>{
        return (
        <Link href={item.route} className='flex'>
            <Image src={item.imgURL} alt='' width={32} height={32}/>
            <p className={cn()}>{item.label}vv</p>
        </Link>)
       })} 
        <p>ddd</p>
    </nav>
</aside>

);}

export default SideBar