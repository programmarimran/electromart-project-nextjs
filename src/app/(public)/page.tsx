"use client";
import { useSession } from "next-auth/react";

export default function Home() {
    const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  return (
   <div>
    Home Page
    {status === "authenticated" ? (
      <div>
        <p>Welcome, {session?.user?.email}</p>
        <p>Session: {JSON.stringify(session)}</p>
      </div>
    ) : (
      <p>You are not logged in.</p>
    )}
   </div>
  );
}
