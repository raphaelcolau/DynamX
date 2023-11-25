import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { wrapper } from '../src/app/tools/redux/store';

import { darktheme } from '../src/app/assets/theme/darktheme';
import { Provider } from 'react-redux';

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props || {};
    return (
      <Provider store={store}>
        <ThemeProvider theme={darktheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
}