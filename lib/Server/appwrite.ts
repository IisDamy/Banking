// lib/appwrite.ts
// src/lib/server/appwrite.js
"use server";

import { Client, Account, Users, TablesDB } from "node-appwrite";
import { cookies } from "next/headers";

export async function createSessionClient(options: { allowUnauthenticated?: boolean } = {}) {
   const { allowUnauthenticated = false } = options;

  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)

    const session = await cookies().get("banking-app-session");

  if (!session?.value) {
    if (!allowUnauthenticated) {
      throw new Error("No session");
    }
    // return client without session set so it can be used for sign-in
    return {
      get account() {
        return new Account(client);
      },
    };
  }

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
  };
}

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
    .setKey(process.env.NEXT_APPWRITE_KEY!);



  return {
    get account() {
      return new Account(client);
    },
    get databases(){
      return new TablesDB(client)
    },
    get user(){
      return new Users(client)
    }
  };
}
