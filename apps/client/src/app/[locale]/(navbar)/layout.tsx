
//OLD CODE - REDUX

/*
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { wrapper } from './store/store';
import { PersistGate } from "redux-persist/integration/react";
import { theme } from '../../_assets/theme/darktheme';
import { Provider } from 'react-redux';
import { CssBaseline } from '@mui/material';
import React from 'react';
import PageLayout from '../../_components/layout/pageLayout';


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
*/

import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../../_assets/theme/darktheme';
import { CssBaseline } from '@mui/material';
import React from 'react';
import PageLayout from '../../../_components/layout/pageLayout';


export default function RootLayout({children,}: { children: React.ReactNode}) {
    return (
          <ThemeProvider theme={theme}>

            <CssBaseline />

            <PageLayout>
              {children}
            </PageLayout>

          </ThemeProvider>
    );
}