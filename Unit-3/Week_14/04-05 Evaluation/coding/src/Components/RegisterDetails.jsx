import React from 'react';
import styled from 'styled-components';
import { UserAuthContext } from '../Contexts/UserAuthContextProvider';

const Container = styled.div`

`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`

`;

const Input = styled.input`

`;

const Btn = styled.button`
    cursor: pointer;
`;

export const RegisterDetails = () => {

    const { handleRegInp, handleRegister } = React.useContext(UserAuthContext);
    
    return (
        <>
            <Container>
                <Form onSubmit={handleRegister} >
                    <Label>
                        Full Name: 
                        <Input type="text" name="name" onChange={handleRegInp} />
                    </Label>
                    <Label>
                        Email: 
                        <Input type="email" name="email" onChange={handleRegInp} />
                    </Label>
                    <Label>
                        Password: 
                        <Input type="text" name="password" onChange={handleRegInp} />
                    </Label>
                    <Btn>Submit</Btn>
                </Form>
            </Container>
        </>
    )
}
