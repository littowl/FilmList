import styled from 'styled-components'

export const SortBy = styled.div`
    display: flex;
`

export const Item = styled.button`
    margin-left: 10px;
    margin-top: 10px;
    color: ${(props) => props.theme.header};
    font-size: 18px;
`
