import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { wrapper } from '../src/app/tools/redux/store';
import { PersistGate } from "redux-persist/integration/react";
import { useStore } from "react-redux";
import { darktheme } from '../src/app/assets/theme/darktheme';
import { Provider } from 'react-redux';
import { CssBaseline } from '@mui/material';

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props || {};
    return (
      <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
        <Provider store={store}>
          <ThemeProvider theme={darktheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </PersistGate >
    );
}