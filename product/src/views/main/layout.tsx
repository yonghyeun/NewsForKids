import React from "react";

export const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="kr">
      <body
        className="min-h-screen
        bg-gray-300
      "
      >
        {children}
      </body>
    </html>
  );
};
