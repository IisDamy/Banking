import React from 'react'

export const ArticleForm = ({type}:AuthFormProps) => {
    const msg = type==='sign-in'?'Log in': 'Sign up'
  return (
    <div className='flex flex-col gap-4 items-center w-screen'>
        <h1>
            {msg}
        </h1>
        <form>

        </form>
        <p>
            {msg}
        </p>
        <p>
            Don't have an account? {msg} 
        </p>
    </div>
  )
}
