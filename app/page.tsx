import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/auth";
import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieListWrapper from "@/components/MovieListWrapper";

const Home = async () => {
  const session = await getCurrentUser();
  if (!session) return redirect("/auth");

  return (
    <>
      <Navbar />
      <Billboard />
      <MovieListWrapper />
    </>
  );
};

export default Home;
