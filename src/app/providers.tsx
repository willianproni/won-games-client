import { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '@/styles/global'
import Theme from '@/styles/theme'

export function Provider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
