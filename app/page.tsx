import { signOut, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

import { getCurrentUser } from "@/lib/auth";
import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "./components/Navbar";
import Billboard from "./components/Billboard";

const Home = async () => {
  const session = await getCurrentUser();
  if (!session) return redirect("/auth");

  return (
    <>
      <Navbar />
      <Billboard />
    </>
  );
};

export default Home;
