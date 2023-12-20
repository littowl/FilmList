import { PropsWithChildren } from 'react'

import { QueryProvider } from './QueryProvider'
import { ThemeProvider } from './ThemeProvider'
import { MantineProvider } from '@mantine/core'

export const RootProvider: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <QueryProvider>
            <MantineProvider>
                <ThemeProvider>{children}</ThemeProvider>
            </MantineProvider>
        </QueryProvider>
    )
}
