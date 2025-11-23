import React from 'react'
import Link from 'next/link'
import { formatAmount } from '@/lib/utils'
import Image from 'next/image'

const BankCard = ({account, userName, showBalance= true}:CreditCardProps) => {
  return (
    <div className='flex flex-col'>
        <Link href='/' className='bank-card'>
            <div className='bank-card_content'>
                <div>
                    <h1 className='text-16 font-semibold text-white'>
                        {account.name || 'Damy'}
                    </h1>
                    <p className='font-ibm-plex-serif font-black 
                    text-white'>
                        {formatAmount(account.currentBalance)}

                    </p>
                </div>
                <article className='flex flex-col gap-2'>
                    <div className='flex justify-between'>
                        <h1 className='text-12 font-semibold text-white'>
                            {userName}
                        </h1>
                          <h2 className='text-12 font-semibold text-white'>
                            ** / **
                        </h2>
                        <p className='text-14 font-semibold tracking-[1.1px] text-white'>
                            **** **** **** <span className='text-16'></span>
                        </p>
                    </div>
                </article>
            </div>
            <div className='bank-card_icon'>
                <Image src='/icons/Paypass.svg' width={20} height={24} alt='Pay'/>
                <Image src='/icons/mastercard.svg' width={45} height={32} alt='Mastercard'/>
                <Image src="/icons/lines.png" width={316} height={190} alt=''/>

            </div>
        </Link>
    </div>
  )
}

export default BankCard