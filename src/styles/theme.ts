import { createGlobalStyle } from 'styled-components'

export const darkTheme = {
    backgroundColor: '#1F2023',
    film: '#373434',
    select: '#1F2023',
    page: 'rgba(255, 255, 255, 0.2)',
    header: '#b6cfe8',
    textColor: '#F5F5F5',
    infoIconColor: '#2D2F34',
    iconColor: '#27292D',
    accentColor1: `rgb(106,192,69)`,
    accentColor2: '#00c6ff',
    shadowColor: 'rgba(0,0,0,0.2)',

    textSizeTitle: '25px',
    textSizeTitle900: '22px',
    textSizeTitle700: '22px',
    textSizeTitle500: '22px',

    textSizeTextL: '22px',
    textSizeTextL900: '20px',
    textSizeTextL700: '20px',
    textSizeTextL500: '20px',

    textSizeTextM: '16px',
    textSizeTextM900: '14px',
    textSizeTextM700: '14px',
    textSizeTextM500: '14px',

    textSizeTextS: '12px',
    textSizeTextS900: '10px',
    textSizeTextS700: '10px',
    textSizeTextS500: '10px',

    borderRadius: '15px',
}

export const lightTheme = {
    backgroundColor: 'rgba(188, 188, 188, 0.2)',
    film: 'white',
    select: 'white',
    page: '#d5d5d5',
    header: '#76A5E7',
    textColor: 'black',
    infoIconColor: '#FAFAFA',
    iconColor: 'white',
    accentColor1: `rgb(106,192,69)`,
    accentColor2: '#00c6ff',
    shadowColor: 'rgba(0,0,0,0.2)',

    textSizeTitle: '25px',
    textSizeTitle900: '22px',
    textSizeTitle700: '22px',
    textSizeTitle500: '22px',

    textSizeTextL: '22px',
    textSizeTextL900: '20px',
    textSizeTextL700: '20px',
    textSizeTextL500: '20px',

    textSizeTextM: '16px',
    textSizeTextM900: '14px',
    textSizeTextM700: '14px',
    textSizeTextM500: '14px',

    textSizeTextS: '12px',
    textSizeTextS900: '10px',
    textSizeTextS700: '10px',
    textSizeTextS500: '10px',

    borderRadius: '15px',
}

export const GlobalStyle = createGlobalStyle`
  a{
    text-decoration: none;
    color: ${(props) => props.theme.textColor};
    display: flex;
    width: 100%;
    font-family: 'M PLUS Rounded 1c', sans-serif;
  }
  body{
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.backgroundColor};
    transition: 0.1s;
    color: ${(props) => props.theme.textColor};
  }
`
