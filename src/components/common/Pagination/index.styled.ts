import styled from 'styled-components'

export const Pagination = styled.div`
    display: flex;
    width: 100%;
    min-height: 40px;
    flex: 0 0 auto;
    justify-content: center;
    transition: 0.1s;
    margin: 20px 0px;
`

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`

export const Item = styled.div`
    cursor: pointer;
    display: flex;
    flex: 0 0 auto;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    height: 100%;
    border-radius: 5px;
    padding: 0px 10px;
    box-sizing: border-box;
    transition: 0.1s;
    &:hover {
        transition: 0.1s;
        box-shadow: 0px 0px 5px #b6cfe8;
    }
    margin: 0px 10px 0px 0px;
    &:last-child {
        margin: 0px 0px 0px 0px;
    }
`

export const ActiveItem = styled(Item)`
    color: ${(props) => props.theme.color};
    background: ${(props) => props.theme.page};
`
