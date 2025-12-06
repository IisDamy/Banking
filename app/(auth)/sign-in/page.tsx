
import { AuthForm} from '@/components/ui/AuthForm'
import React from 'react'
import { getLoggedInUser } from '@/lib/Server/ACTIONS/user.actions'



const SIGN_IN =async () => {

const LoggedIn =await getLoggedInUser()
console.log(LoggedIn)


  
  return (
    <div className='w-full '>
       <p>
        <AuthForm type={'sign-in'}/>
      </p> 
    </div>
  )
}

export default SIGN_IN