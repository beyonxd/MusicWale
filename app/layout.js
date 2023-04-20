import "../styles/globals.css";
import Header from "./header";
import React from "react";
import Auth0 from "@/components/Clients/Auth0";

export const metadata = {
  title: "MusicWale",
  description: "MusicWale official website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="grad backdrop-blur">
        <Auth0>
          <Header />
          {children}
        </Auth0>
      </body>
    </html>
  );
}
