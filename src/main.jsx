
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global.js'
import theme from './styles/theme.js'

import { AuthProvider } from './hooks/auth'

import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
    <GlobalStyles />
    <AuthProvider>
      <Routes />
      </AuthProvider>
</ThemeProvider>
)
