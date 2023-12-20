import styled from 'styled-components'

export const Favourites = styled.button`
    border-radius: 10px;
    &:hover {
        & > svg {
            opacity: 0.5;
            transition: 0.3s;
        }
    }
`
