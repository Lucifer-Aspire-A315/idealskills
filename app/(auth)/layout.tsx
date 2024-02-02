import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import '../globals.css';
import React from "react";

export const metadata = {
    title: 'Ideal Skills',
    description: 'A next-js 13 meta Ideal Skills App'
}

const inter = Inter({ subsets: ["latin"] })

export default function Rootlayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} bg-dark-1`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}