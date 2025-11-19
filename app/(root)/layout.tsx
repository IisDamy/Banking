import "../globals.css";
import SideBar from "@/components/ui/SideBar"


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
   <main className="flex sm:flex ">
      <SideBar user={loggedIn}/>  
      {children}
   </main>
  );
}
