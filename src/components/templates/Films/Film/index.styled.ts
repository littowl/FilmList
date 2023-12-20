import styled from 'styled-components'

export const Film = styled.div`
    padding: 15px;
    border-radius: 10px;
    display: flex;
    margin-top: 20px;
    margin-right: 10px;
    width: 49%;
    background: ${(props) => props.theme.film};
    &:hover {
        transition: 0.3s;
        box-shadow: 0px 0px 5px #b6cfe8;
    }
    @media (max-width: 876px) {
        width: 100%;
    }
`

export const Img = styled.img`
    width: 20%;
`

export const Info = styled.div`
    margin-left: 20px;
    width: 60%;
`

export const Title = styled.h3``

export const Favourites = styled.button`
    align-self: start;
`
