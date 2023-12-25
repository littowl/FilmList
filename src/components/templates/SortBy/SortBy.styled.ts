import styled from 'styled-components'

export const SortBy = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 330px;
    flex-wrap: wrap;
    button:first-child {
        border-right: 1px black solid;
        padding-right: 10px;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: start;
        button:first-child {
            border-right: none;
        }
    }
`

export const Item = styled.button`
    margin-top: 10px;
    color: ${(props) => props.theme.header};
    font-size: 18px;
`
