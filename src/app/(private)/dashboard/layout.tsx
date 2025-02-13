"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";
import ProtectedLayout from "./protected-layout";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ProtectedLayout>
        <header className="border-b border-violet-900 bg-gray-900">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <Link href="/dashboard">
                  <h1 className="text-2xl font-bold text-white sm:text-3xl">
                    Gestión de ingresos y gastos
                  </h1>
                </Link>

                <p className="mt-1.5 text-sm text-gray-400">
                  Una forma sencilla de gestionar tus ingresos y gastos.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Button
                  as={Link}
                  color="secondary"
                  href="/dashboard/add"
                  variant="ghost"
                >
                  Añadir nuevo
                </Button>
              </div>
            </div>
          </div>
        </header>
        {children}
      </ProtectedLayout>
    </>
  );
}
