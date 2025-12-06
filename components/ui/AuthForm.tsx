'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { zodResolver } from "@hookform/resolvers/zod"
import {Controller, useForm } from "react-hook-form"
import * as z from "zod";
import { Button } from "@/components/ui/button"

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Loader2, LogIn } from 'lucide-react'
import { getLoggedInUser, signUp, signIn, signOut } from '@/lib/Server/ACTIONS/user.actions'
import { error } from 'console'
import { useRouter } from 'next/navigation'
import { cookies } from 'next/headers'

  




export const AuthForm = ({type}:AuthFormProps) => {

   const formSchema = z.object({
    email: z.string().email('Enter a valid email address'),
  firstName: z.string().min(2, {message:"Name must contain at least 2 characters"}),
  lastName: z.string().min(2, {message:"Name must contain at least 2 characters"}),
  password: z.string().min(8, 
   { message: "Password must be at least 8 characters and should not be commonly used"}
  ).max(20),
  address: z.string().min(4),
  state: z.string(),
  postalCode: z.string(),
  dateOfBirth: z.string(),
  ssn: z.string().max(4, {
    message: "Username must be at least 2 characters.",
  })
})


const [user, setUser]= useState(null)
const [isLoading, setIsLoading] = useState(false)
const router = useRouter()
 


const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    email: "toby@gmail.com",
    password: '12345',
    address:"tobital",
    state:'tobiton',
    firstName:'tody',
    lastName:'tobit',
    postalCode: '1254',
    ssn: '1235',
    dateOfBirth: '09072011',

  }
})




 const onSubmit = async (data: z.infer<typeof formSchema>) =>{
    setIsLoading(true)
    // Do something with the form values.
    try{
      //sign up brah usign appwrite & create plaid token
    if(type==='sign-up'){
    const newUser = await signUp(data)
      
    if(newUser) {
    setUser(newUser)
    }
        
    
  
    }
    
    if(type==='sign-in'){
      const response = await signIn({
        email:data.email,
        password: data.password
      })
      if(response){
        router.push('/')

      }
    }
    }
   catch(error){
    console.log(error)
   }
   finally {setIsLoading(false)}
  }
  

  return (
   <section className='auth-form mx-auto '>
    <header className='flex flex-col gap-5 md:gap-8'>
        <Link href='/' className='cursor-pointer flex  items-center gap-1'>
            <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt='Horizon logo'
            />
            <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>
            Horizon
        </h1>
        </Link>
    </header>
       
        <form onSubmit={form.handleSubmit(onSubmit)} id='form-rhf-auth' className=' '>
        {<FieldSet>
          <div className='flex flex-col gap-1 md:gap-3'>
            <div className='py-4'>
              <FieldLegend>
             <h1 className='text-24 lg:text-36
            font-semibold text-gray-900'>
                {
                user?'Link Account'
                : type === 'sign-in'?'Sign in':
                'Sign up'}
            </h1>
          </FieldLegend>
          <FieldDescription>
              <p className='text-16 font-normal text-gray-600'>
                {user
                ?'Link your account ':'please enter your details'}

            </p>
          </FieldDescription>
            </div>


      {!user && <FieldGroup className=''>
        {type==='sign-up'&& <>
          <div className='grid grid-cols-2 gap-4 '>
            <Controller control={form.control} name={'firstName'} render={({ field, fieldState }) => {
                    return (
                       <Field data-invalid={fieldState.invalid}>
                       
                    <FieldContent>
                       <FieldLabel>First Name</FieldLabel>
                <Input
                  {...field}
                  id="firstName"
                  aria-invalid={fieldState.invalid}
                  placeholder="first name"
                  type="text"
                  autoComplete='off'
                />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                    </FieldContent>
                  
                </Field>
                    )
                    }}/>

       <Controller control={form.control} name={'lastName'} render={({ field, fieldState }) => {
                    return (
                <Field data-invalid={fieldState.invalid}>
                    <FieldContent>
                  <FieldLabel>Last Name</FieldLabel>
            
                <Input
                  {...field}
                  id="lastName"
                  aria-invalid={fieldState.invalid}
                  placeholder="Last Name"
                  type="text"
                  autoComplete='off'
                />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                    </FieldContent>
                  
                </Field>
                    )
                    }}/>
        </div>
       
      
       <Controller control={form.control} name={'address'} render={({ field, fieldState }) => {
                    return (
                    <Field data-invalid={fieldState.invalid}>

                    <FieldContent>
                       <FieldLabel>
                        Address
                      </FieldLabel>
                <Input
                  {...field}
                  id="address"
                  aria-invalid={fieldState.invalid}
                  placeholder="Address"
                  type="text"
                  autoComplete='off'
                />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </FieldContent>
              </Field>
                    )
                    }}/>

        <div className='grid grid-cols-2 gap-4 '>
                
       <Controller control={form.control} name={'state'} render={({ field, fieldState }) => {
                    return (
                       <Field data-invalid={fieldState.invalid}>
                    <FieldContent>
                       <FieldLabel>
                        State
                      </FieldLabel>
                <Input
                  {...field}
                  id="state"
                  aria-invalid={fieldState.invalid}
                  placeholder="ex: Abuja"
                  type="text"
                  autoComplete='off'
                />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                    </FieldContent>
                  
                </Field>
                    )
                    }}/>
      
       <Controller control={form.control} name={'postalCode'} render={({ field, fieldState }) => {
                    return (
              <Field data-invalid={fieldState.invalid}>
                    <FieldContent>
                      <FieldLabel>
                        Postal Code
                      </FieldLabel>
                <Input
                  {...field}
                  id="postalCode"
                  aria-invalid={fieldState.invalid}
                  placeholder="1101"
                  type="text"
                  autoComplete='off'
                />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                    </FieldContent> 
              </Field>
                    )
                    }}/>
      
      

      
       <Controller control={form.control} name={'dateOfBirth'} render={({ field, fieldState }) => {
                    return (
              <Field data-invalid={fieldState.invalid}>
                    <FieldContent>
                      <FieldLabel>DOB</FieldLabel>
                <Input
                  {...field}
                  id="dateOfBirth"
                  aria-invalid={fieldState.invalid}
                  placeholder="yyyy-mm-dd"
                  type="string"
                  autoComplete='off'
                />
                   {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} className='text-red-600'/>
                  )}
                    </FieldContent>
                  
              </Field>
                    )
                    }}/>

     <Controller control={form.control} name={'ssn'} render={({ field, fieldState }) => {
                    return (
                       <Field data-invalid={fieldState.invalid}>
                    <FieldContent>
                      <FieldLabel>SSN</FieldLabel>
                <Input
                  {...field}
                  id="ssn"
                  aria-invalid={fieldState.invalid}
                  placeholder="shadcn"
                  type="string"
                  autoComplete='off'
                />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                    </FieldContent>
                  
                </Field>
                    )
                    }}/>
        </div>

              </> }     


    
      <Controller control={form.control} name={'email'} render={({ field, fieldState }) => { 
                return (<Field data-invalid={fieldState.invalid}>
                            <FieldContent>
                              <FieldLabel htmlFor="form-rhf-auth-Email">
                    Email
                  </FieldLabel>
                  <Input
                    {...field}
                    id="email"
                    aria-invalid={fieldState.invalid}
                    placeholder="shadcn"
                    autoComplete="username"
                    type='string'
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                  </FieldContent>
                 </Field>)
 
                      }}/>
    <Controller control={form.control} name={'password'} render={({ field, fieldState }) => {
                    return (
                       <Field data-invalid={fieldState.invalid}>
                    <FieldContent>
                    <FieldLabel>Password</FieldLabel>
                <Input
                  {...field}
                  id="password"
                  aria-invalid={fieldState.invalid}
                  placeholder="Password"
                  type="password"
                  autoComplete='off'
                />
                   
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} className='text-red-800' />
                  )}
                    </FieldContent>
                </Field>
                    )
                    }}/>
          
  </FieldGroup>}
  </div>
</FieldSet>}
<Field orientation={'horizontal'} >
            <Button type="submit" form="form-rhf-auth" className='form-btn mt-8' disabled={isLoading} >
            {isLoading? 
            <>
              <Loader2 size={20} className='animate-spin'/> &nbsp;
              Loading...
            </>
            
             :type==='sign-up'?"Sign up":"Log in"}
          </Button>       
</Field>
</form>
<footer>
  <p> {user?"Do you want to link an account? ":type==='sign-up'?
  "Already have an account? ":"Don't have an account? " }
  <Link href={type==='sign-in'?'/sign-up':'/sign-in'}>
    {user?"Link account":type==='sign-up'?
  "Log in":"Sign up" }
  </Link>
  </p>
  

 
</footer>

        
    
   </section>
  )
}
