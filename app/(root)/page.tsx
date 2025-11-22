import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox';
import TotalBalanceBox from '@/components/ui/totalBalanceBox';
import RightSideBar from '@/components/RightSideBar';


const Home = () => {
  const loggedIn = { firstName:"Damy",lastName: "Owoade",
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
  ssn: "'string'", }; // to be replaced with actual auth logic
  
  return (
    <section className='home flex-row'>
      <div className='home-content'>
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
      <RightSideBar user={loggedIn} banks={[]} transactions={[]}/>
    </section>
    
  )
}

export default Home