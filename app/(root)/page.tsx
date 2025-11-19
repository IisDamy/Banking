import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox';
import TotalBalanceBox from '@/components/ui/totalBalanceBox';


const Home = () => {
  const loggedIn = { firstName:"Damy" }; // to be replaced with actual auth logic
  
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
        <HeaderBox 
        type="greeting" 
        title="Welcome"
        user={loggedIn?.firstName || "Guest"}

        subtext="Access and manage your account and transactions efficiently"
        />
      </header>
        page
      </div>
      <div className='w-full bg-black-2 h-full'>
        <TotalBalanceBox 
       accounts={[]}
       totalBanks={1}
       totalCurrentBalance={1250.35}
       />
      </div>
       
    </section>
    
  )
}

export default Home