import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/auth";
import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieListWrapper from "@/components/MovieListWrapper";
import InfoModalWrapper from "@/components/InfoModalWrapper";

const Home = async () => {
  const session = await getCurrentUser();
  if (!session) return redirect("/auth");

  return (
    <>
      <InfoModalWrapper />
      <Navbar />
      <Billboard />
      <MovieListWrapper />
    </>
  );
};

export default Home;
