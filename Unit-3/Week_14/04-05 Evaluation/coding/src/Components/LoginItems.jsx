import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`

`;

const Label = styled.label`

`;

const Btn = styled.button`

`;

export const LoginItems = () => {
    return (
        <>
            <Container>
                <Form>
                    <Label>
                        Email: 
                        <Input type="email"/>
                    </Label>
                    <Label>
                        Password: 
                        <Input type="text"/>
                    </Label>
                    <Btn>Login</Btn>
                </Form>
            </Container>
        </>
    )
}
