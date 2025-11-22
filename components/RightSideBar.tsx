import React, { use } from 'react'

const RightSideBar = ({user, banks, transactions}:RightSidebarProps) => {
  const firstName = user.firstName
    return (
    <div>
        <aside className='right-sidebar'>
            <div className='profile-banner'/>
            <p>{firstName[0]}</p>
            <div>
                
            </div>
            <div>

            </div>
        </aside>
    </div>
  )
}

export default RightSideBar 