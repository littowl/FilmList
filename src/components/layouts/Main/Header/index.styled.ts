import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5vh;
    font-family: Rubik Doodle Shadow;
    font-size: 24px;
    color: ${(props) => props.theme.header};
`

export const Name = styled.h1``

export const Button = styled.button`
    & > svg {
        width: 24px;
        height: 24px;
    }
`
