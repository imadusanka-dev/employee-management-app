"use client";

import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Header } from "../components";

// Create a client
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <AntdRegistry>
            <Header />
            {children}
          </AntdRegistry>
        </QueryClientProvider>
      </body>
    </html>
  );
}
