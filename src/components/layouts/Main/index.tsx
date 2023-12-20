import { PropsWithChildren, useContext } from 'react'

import { ThemeContext } from '@/components/providers/ThemeProvider'
import Header from './Header/Header'
import * as Style from './index.styled'

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
    const context = useContext(ThemeContext)

    return (
        <Style.App>
            <Header
                switchTheme={() => context?.switchTheme()}
                theme={context?.theme}
            />
            {children}
        </Style.App>
    )
}
