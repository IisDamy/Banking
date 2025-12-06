import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox';
import TotalBalanceBox from '@/components/ui/totalBalanceBox';
import RightSideBar from '@/components/ui/RightSideBar';
import { getLoggedInUser } from '@/lib/Server/ACTIONS/user.actions';

const Home = async() => {

  const loggedIn =  {firstName:"Damy", lastName: "Owoade",
    email:"wubadubdub@gmail.com",
    $id: 'string',
  userId: 'string',
  dwollaCustomerUrl: 'string',
  dwollaCustomerId: 'string',
  address1: 'string',
  city: 'string',
  state: 'string',
  postalCode: '',
  dateOfBirth: "'string'",
  ssn: "'string'",
  };
   // to be replaced with actual auth logic
  const bank1 = 
    { $id: 'string',
  accountId: 'string',
  bankId: 'string',
  accessToken: 'string',
  fundingSourceUrl: 'string',
  userId: 'string',
  sharableId: 'string'}

  return (
    <section className='home flex-row'>
      <div className='home-content '>
        <header className='home-header'>
        <HeaderBox 
        type="greeting" 
        title="Welcome"
        user={loggedIn?.firstName || "Guest"}
        subtext="Access and manage your account and transactions efficiently"
        />
      </header>
      <div className='w-full  h-full'>
        <TotalBalanceBox 
       accounts={[]}
       totalBanks={1}
       totalCurrentBalance={1250.35}
       />
      </div>
      </div>
      <RightSideBar user={loggedIn} banks={[{},{}]} transactions={[]}/>
    </section>
    
  )
}

export default Home