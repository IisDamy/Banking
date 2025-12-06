import React from 'react'
import { signOut } from '@/lib/Server/ACTIONS/user.actions'
const SIGN_OUT = async () => {

  return (
    <div>
      <p>
        <button onClick={signOut}>
            Sign Out
        </button>
        
      </p>
    </div>
  )
}

export default SIGN_OUT