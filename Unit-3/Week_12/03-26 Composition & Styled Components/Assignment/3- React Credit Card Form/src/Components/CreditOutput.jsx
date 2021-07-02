import React from 'react'
import { CreditForm } from './CreditForm'
import styled from 'styled-components'

const Container = styled.div`
    width: 850px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    `;
    
    const Image = styled.div`
    width: 400px;
    height:250px;
    margin:50px;
    margin-right: 100px;
    border-radius: 11.5px;
    box-shadow: 25px 25px 25px 3px grey;
    `;
    
    const Form = styled.div`
    width: 300px;
    padding-left: 40px;
`;

export const CreditOutput = ({image}) => {
    return (
        <Container>
            <Image>
                {image}
            </Image>
            <Form>
                <CreditForm />
            </Form>
        </Container>
    )
}
