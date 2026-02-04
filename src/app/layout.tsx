import "./globals.css";
import { ReactNode } from "react";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });

export const metadata = {
  title: "AI Training & Web-App Building",
  description: "Promote my AI training and web-app building service",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-background bg-page-gradient font-sans">
        <nav className="sticky top-0 bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="text-xl font-bold">ClawAI</div>
            <div className="space-x-4">
              <a href="#FinalCTA" className="text-indigo-600 hover:underline">
                Learn More
              </a>
              <a href="https://wa.me/" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
