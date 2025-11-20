import MobileNavBar from "@/components/ui/MobileNavBar";
import "../globals.css";
import SideBar from "@/components/ui/SideBar"
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
   <main className="flex max-sm:flex-col ">
     
        <div className="hidden justify-between px-2 max-sm:flex">
          <Image src={'/icons/logo.svg'} width={14}
           height={14}/>
          <MobileNavBar user={loggedIn}/>
        </div>
      <SideBar user={loggedIn}/>  
  
      {children}
   </main>
  );
}
