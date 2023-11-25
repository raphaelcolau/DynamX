import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { wrapper } from '../src/app/tools/redux/store';
import { darktheme } from '../src/app/assets/theme/darktheme';

function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={darktheme}>
          <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default wrapper.withRedux(App);