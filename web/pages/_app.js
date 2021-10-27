import * as React from 'react'
import Meta from '../components/meta'
import ColorSwitcher from '../components/color-switcher'
import theme from 'theme-ui-preset-geist'
import { ThemeProvider } from 'theme-ui'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider  theme={{
      ...theme,
      colors: { ...theme.colors, ...theme.colors.modes.dark, modes: {} }
    }}>
      <Meta />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
