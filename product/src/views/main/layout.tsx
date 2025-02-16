import React from "react";
import { ReactQueryProvider } from "@/app/ReactQueryProvider";

export const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="kr">
      <body className="min-h-screen p-4 border max-w-5xl mx-auto">
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
};
