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
 const { account } = await createSessionClient();
 const response = await account.createEmailPasswordSession({
    email,
    password
  });
  console.log(response)
  return parseStringify(response)
  }

   catch (error) {
    return null;
  }
}


export async function signOut(){
try{
  const { account } = await createSessionClient();

  cookies().delete("banking-app-session");
  await account.deleteSession({ sessionId: "current" });

  redirect("/sign-up");
}
catch(error){

}
}

export const signUp = async (userData:SignUpParams)=>{
  const email = userData.email
  const password = userData.password
try{
  const { account, database } = await createAdminClient();

 const newUser =  await account.create({
  userId: ID.unique(),
  name: `${userData.firstName} ${userData.lastName}`,
  ...userData
  });
  const session = await account.createEmailPasswordSession({
    email,
    password
  });

  const promise = database.createRow({
    databaseId:'',
    tableId:'',
    rowId:'',
    data:{

    }

  })

  promise.then(function(response){
    console.log(response)
  })

  cookies().set("banking-app-session", session.secret, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });
 return parseStringify(newUser)
}
catch(error){
console.log(error)
}

}

// ... your initilization functions

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const loggedIn = await account.get();
    return parseStringify(loggedIn)
  } catch (error) {
    return null;
  }
}


  
