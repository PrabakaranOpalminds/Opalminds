import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Container, CssBaseline } from '@mui/material';
import theme from '../theme'
import type { AppProps } from 'next/app'
import { MainLayout } from '@/components/Layouts/main-layout';



export default function App({ Component, pageProps }: AppProps) {
  return (

    <AppCacheProvider {...pageProps}>
      <ThemeProvider theme={theme}>

        <CssBaseline />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
        {/* <Footer/> */}
      </ThemeProvider>

    </AppCacheProvider>
  )
}
