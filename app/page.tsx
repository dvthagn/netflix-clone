
import {  signOut  } from "next-auth/react"
import { redirect, useRouter } from "next/navigation";

import { getCurrentUser } from "@/lib/auth";
import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "./components/Navbar";



const Home = async () =>{
  const session = await getCurrentUser();

  if (!session) redirect("/auth")
  
  return (
    <>
     <Navbar />
    </>
  );
}

export default Home;
