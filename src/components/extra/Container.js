import React, { Fragment } from 'react'
import styled from 'styled-components'


const StyledContainer = styled.div`
    border: 4px dashed #E2E2E2;
    border-radius: 10px;
    padding: 5px;
    margin: 20px 20px;
`



export default function ({ children }) {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}