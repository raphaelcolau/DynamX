import { ReactNode } from 'react';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.css'
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DynamX',
  description: 'DynamX mod for Minecraft. Add physics and more to your game.',
}

export default async function RootLayout({ children, params: { locale } }: { children: ReactNode, params: { locale: string } }) {
  
  let messages;

  // Validate that the incoming `locale` parameter is valid
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default
  } catch (error) {
    notFound();
  }
  
  return (
    <html lang={locale}>
      <body 
        className={inter.className}
      >
        <NextIntlClientProvider messages={messages}>
          <AppRouterCacheProvider>
            {children}
          </AppRouterCacheProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}