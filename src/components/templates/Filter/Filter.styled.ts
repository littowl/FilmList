import styled from 'styled-components'

export const Select = styled.div`
    cursor: pointer;
    width: 30%;
    @media (max-width: 768px) {
        width: 100%;
    }
    height: 40px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px ${(props) => props.theme.header} solid;
    border-radius: 5px;
    font-size: 18px;
    &:focus {
        outline: #73a7dc;
    }
    & > svg {
        width: 16px;
        height: 16px;
        color: #a1a8ab;
    }
    position: relative;
    background: ${(props) => props.theme.select};
`

export const OptionsGroup = styled.div`
    margin-top: 5px;
    border: 1px ${(props) => props.theme.header} solid;
    border-radius: 5px;
    width: 27%;
    @media (max-width: 768px) {
        width: 90%;
    }
    position: absolute;
    background: ${(props) => props.theme.select};
    z-index: 2;
    font-size: 18px;
`

export const Option = styled.div`
    margin-top: 5px;
    &:hover {
        cursor: pointer;
        background: rgba(0, 0, 0, 0.2);
    }
    padding: 10px;
`
