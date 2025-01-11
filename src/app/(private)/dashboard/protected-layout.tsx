"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isAuthenticated, setAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setAuthenticated(false);
      router.replace("/");
    } else {
      setAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated || isAuthenticated === null) {
    return <div className="h-screen bg-red-500">Cargando...</div>;
  }

  return <>{children}</>;
}
