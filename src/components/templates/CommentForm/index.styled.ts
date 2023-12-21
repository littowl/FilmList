import styled from 'styled-components'

export const Comments = styled.div``

export const InputForm = styled.div`
    margin-top: 30px;
    padding-bottom: 10px;
    width: 100%;
    border-bottom: 1px ${(props) => props.theme.color} solid;
    display: flex;
    justify-content: space-between;
`

export const Input = styled.input`
    width: 90%;
    font-size: 20px;
    &:focus {
        outline: black;
    }
    color: ${(props) => props.theme.textColor};
`

export const Send = styled.button`
    & > svg {
        width: 24px;
        height: 24px;
        stroke-width: 1;
        color: ${(props) => props.theme.textColor};
    }
`

export const List = styled.ul`
    list-style-type: none;
`

export const Comment = styled.li`
    margin-top: 30px;
    background: ${(props) => props.theme.film};
    padding: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Text = styled.div`
    display: flex;
    height: auto;
    align-items: center;
    font-size: 20px;
`

export const Delete = styled.button`
    cursor: pointer;
    margin-left: 10px;
    display: flex;
    align-items: center;
    & > svg {
        width: 20px;
        height: 20px;
        fill: #ab9d9d;
    }
`

export const Placeholder = styled.p`
    margin-top: 20px;
    font-size: 20px;
    color: #a1a8ab;
`
