import * as React from 'react'
import Meta from '../components/meta'
import ColorSwitcher from '../components/color-switcher'
import theme from 'theme-ui-preset-geist'
import { ThemeProvider } from 'theme-ui'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Meta />
      <ColorSwitcher />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App