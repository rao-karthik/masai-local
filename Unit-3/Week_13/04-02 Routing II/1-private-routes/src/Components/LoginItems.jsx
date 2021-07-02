import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

`;

const FormDiv = styled.div`
    display: flex;
`;

const LabelDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 120px;
`;

const Label = styled.label`

`;

const Inputdiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
`;

const Input = styled.input`

`;

const Btn = styled.input`
    
`;

export const LoginItems = ({email, password, handleChange, handleSubmit}) => {
    
    return (
        <>
            <Container>
                <form onSubmit = {handleSubmit}>
                    <FormDiv>
                        <LabelDiv>
                            <Label>Email</Label>
                            <Label>Password</Label>
                        </LabelDiv>
                        <Inputdiv>
                            <Input type="email" name="email" value={email} placeholder="Enter Email" onChange={handleChange} />
                            <Input type="text" name="password" value={password} placeholder="Enter Password" onChange={handleChange} />
                        </Inputdiv>
                    </FormDiv>
                    <Btn type="submit" value="Submit" />
                </form>
            </Container>   
        </>
    )
}
