import "../globals.css";
import Image from "next/image";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn  = {firstName:"Damy", lastName: "Owoade",
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
    
 
  }
  return (
   <main className="flex flex-col h-screen items-center
   justify-center">
        <div className="flex">
            
        <Image src={'/icons/logo.svg'} alt="" 
         width={32} height={32}/>
         <p className="font-bold">Horizon</p>
    </div>
    <div>
        {children}
    </div>  
   </main>
  );
}
