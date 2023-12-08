import { ReactNode } from 'react';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.css'

const inter = Inter({ subsets: ['latin'] })
const locales = ['en', 'fr'];

export const metadata: Metadata = {
  title: 'DynamX',
  description: 'DynamX mod for Minecraft. Add physics and more to your game.',
}



export default function RootLayout({ children, params: { locale } }: { children: ReactNode, params: { locale: string } }) {
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    throw new Error(`Invalid locale ${locale}`)
  };
  
  return (
    <html lang={locale}>
      <body 
        className={inter.className}
      >
        {children}
      </body>
    </html>
  )
}
