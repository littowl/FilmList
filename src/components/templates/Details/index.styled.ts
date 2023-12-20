import styled from 'styled-components'

export const Details = styled.div``
export const Header = styled.div`
    display: flex;
    align-items: center;
    & > a {
        margin-right: 20px;
        &:hover {
            background: ${(props) => props.theme.color};
            transition: 0.3s;
            box-shadow: 0px 0px 5px #b6cfe8;
        }
        width: 36px;
        padding: 5px;
        border-radius: 25px;
        justify-content: center;
        & > svg {
            width: 24px;
            height: 24px;
            color: #7cb3eb;
        }
    }
    margin-bottom: 30px;
`

export const Info = styled.div`
    display: flex;
    @media (max-width: 920px) {
        flex-direction: column;
    }
`

export const Img = styled.img`
    @media (max-width: 920px) {
        width: 50%;
        margin-bottom: 20px;
    }
`
export const GroupBtn = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 450px;
    @media (max-width: 525px) {
        width: 100%;
        flex-direction: column;
        align-items: start;
    }
    & > button {
        margin-top: 10px;
    }
`

export const About = styled.div`
    margin-left: 20px;
    width: 70% !important;
    @media (max-width: 920px) {
        margin-left: 0;
    }
`

export const Torrent = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-radius: 10px;
    height: 50px;
    width: 230px;
    background: rgba(164, 210, 255, 0.3);
    font-size: 20px;
    &:hover {
        background: ${(props) => props.theme.color};
        transition: 0.3s;
        box-shadow: 0px 0px 5px #b6cfe8;
    }
    & > a {
        justify-content: space-between;
        align-items: center;
    }
`
export const Watch = styled.button`
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    font-size: 20px;
    width: 170px;
    padding: 15px;
    background: rgba(86, 102, 175, 0.5);
    & > a {
        justify-content: center;
        align-items: center;
    }
    &:hover {
        background: ${(props) => props.theme.color};
        transition: 0.3s;
        box-shadow: 0px 0px 5px #b6cfe8;
    }
`

export const Characteristics = styled.div`
    margin: 5% 0;
`
