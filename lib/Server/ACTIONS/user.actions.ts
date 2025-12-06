"use server"
import { createAdminClient, createSessionClient } from "../appwrite"
import { ID } from "node-appwrite";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { parseStringify } from "@/lib/utils";
import { Database } from "lucide-react";
import { Client, TablesDB, Query } from "appwrite";
import { parseVersionInfo } from "next/dist/server/dev/parse-version-info";




export async function signIn({email, password}:signInProps){
try{
 const { account } = await createSessionClient({ allowUnauthenticated: true });
 const response = await account.createEmailPasswordSession({
    email,
    password
  });
  
    return parseStringify(response);
  } catch (error) {
    console.error("signIn error:", error);
    return null;
  }
}


export async function signOut(){
try{
   const { account } = await createSessionClient();
   cookies().delete("banking-app-session");
   await account.deleteSession({ sessionId: "current" });

  redirect("/sign-in");
}
catch(error){

}
}

export const signUp = async (userData:SignUpParams)=>{
const email = userData.email
const password = userData.password
const name = `${userData.firstName} ${userData.lastName}`
try{

  const { account, databases, user } = await createAdminClient();

 const newUser =  await account.create({
  userId: ID.unique(),
  name,
  email,
  password
  });
  const session = await account.createEmailPasswordSession({
    email,   
    password
  });
  
  cookies().set("banking-app-session", session.secret, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });
  
  await databases.createRow({
     databaseId: '692ccf69002fc172718d',
    tableId: '<TABLE_ID>',
    rowId: newUser.$id,
    data: {userData}
  })



 const parseUser = parseStringify(newUser)
   console.log(parseUser,'wwww')
  return parseUser
}
catch(error){
console.log(error)
}

}

// ... your initilization functions

export async function getLoggedInUser() {
  try {
    const { account} = await createSessionClient();
    const loggedIn = await account.get();
    const ParseloggedIn = parseStringify(loggedIn)
    return ParseloggedIn
  } catch (error) {
    return null;
  }
}


  
