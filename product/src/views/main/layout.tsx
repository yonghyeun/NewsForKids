import React from "react";

export const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="kr">
      <body className="min-h-screen">{children}</body>
    </html>
  );
};
