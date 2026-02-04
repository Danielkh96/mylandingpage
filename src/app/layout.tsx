import "./globals.css";
import Link from 'next/link';
import { ReactNode } from "react";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });

export const metadata = {
  title: "AI Training & Web-App Building",
  description: "Promote my AI training and web-app building service",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="bg-background bg-page-gradient dark:bg-none font-sans dark:bg-dark-background dark:text-dark-text-primary">
        <nav className="sticky top-0 bg-white shadow-md z-50 dark:bg-dark-surface">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="text-2xl font-bold text-primary py-2 dark:text-dark-primary">ClawAI</div>
            <div className="space-x-4 flex items-center">
              <Link href="/" className="text-primary hover:underline underline-offset-4 transition dark:text-dark-primary">首页</Link>
              <Link href="/listings" className="text-primary hover:underline underline-offset-4 transition dark:text-dark-primary">课程列表</Link>
              <Link href="/contact" className="text-primary hover:underline underline-offset-4 transition dark:text-dark-primary">联系我们</Link>
              <Link href="/admin" className="text-primary hover:underline underline-offset-4 transition dark:text-dark-primary">管理后台</Link>
              <a href="https://wa.me/" className="inline-block px-6 py-3 bg-primary text-white rounded-xl shadow-lg hover:bg-secondary transition-transform transform hover:-translate-y-0.5 dark:bg-dark-primary dark:text-dark-background dark:hover:bg-dark-secondary">
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
