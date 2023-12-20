import React from 'react'
import { BsMoon } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'
import * as Style from './index.styled'

type HeaderProps = {
    switchTheme: () => void
    theme?: string
}
const Header: React.FC<HeaderProps> = ({ switchTheme, theme }) => {
    return (
        <Style.Header id="header">
            <Style.Name>FilmList</Style.Name>
            <Style.Button onClick={() => switchTheme()}>
                {theme === 'light' ? (
                    <BsMoon />
                ) : (
                    <FiSun style={{ color: 'white' }} />
                )}
            </Style.Button>
        </Style.Header>
    )
}
export default Header
