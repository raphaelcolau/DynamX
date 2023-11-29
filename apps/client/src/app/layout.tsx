'use client';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { wrapper } from '../utils/redux/store';
import { PersistGate } from "redux-persist/integration/react";
import { theme } from '../assets/theme/darktheme';
import { Provider } from 'react-redux';
import { CssBaseline } from '@mui/material';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import PageLayout from '../components/layout/pageLayout';

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'DynamX',
//   description: 'DynamX mod for Minecraft. Add physics and more to your game.',
// }

export default function RootLayout({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props || {};
    return (
      <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <PageLayout>
              <Component {...pageProps} />
            </PageLayout>
          </ThemeProvider>
        </Provider>
      </PersistGate >
    );
}

/*
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <PageLayout>
              {children}
            </PageLayout>
          </ThemeProvider>
    </html>
  )
}
*/