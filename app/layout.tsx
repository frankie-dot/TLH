import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "The Last Human",
  description: "The Last Human Description | Is here!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
         <link rel="icon" href="/mouth.png" sizes="any" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      <body>
        {children}
      </body>
    </html>
  );
}
