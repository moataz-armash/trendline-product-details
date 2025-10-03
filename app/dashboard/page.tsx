"use client";

import ProtectedClient from "../components/ProtectedClient";

export default function Page() {
  const name =
    typeof window !== "undefined" ? localStorage.getItem("name") : "";

  return (
    <ProtectedClient>
      <main className="py-24 px-8">
        <h1 className="text-2xl font-semibold text-center">
          Welcome {name || "User"}
        </h1>
      </main>
    </ProtectedClient>
  );
}
