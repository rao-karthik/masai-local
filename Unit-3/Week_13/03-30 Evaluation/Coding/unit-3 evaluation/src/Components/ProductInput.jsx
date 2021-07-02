import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 350px;
    border-radius: 5px;
    background: #22272e;
    color: white;
    padding-bottom: 20px;
    margin: auto;
    margin-top: 20px;
`;

const FormCont = styled.div`
    width: 100%;
    height: 100%;
    padding: 30px;
    display: flex;
`;

const LabelCont = styled.div`
    line-height: 50px;
`;

const InputCont = styled.div`
    margin-left: 20px;
`;

const Label = styled.label`
    padding-bottom: 50px;
`;

const Select = styled.select`
    margin: 10px;
    width: 180px;
    height: 30px;
`;

const Input = styled.input`
    margin: 10px;
    width: 180px;
    height: 25px;
`;

const Btn = styled.button`
    width: 100px;
    height: 30px;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    background: teal;
    margin-left: 130px;
`;

export const ProductInput = ({handleSubmit, handleChange, imageRef}) => {
    return (
        <>
            <Container>
                <form onSubmit = {handleSubmit}>
                    <FormCont>
                        <LabelCont>
                            <Label>Title</Label><br/>
                            <Label>Cost</Label><br/>
                            <Label>Category</Label><br/>
                            <Label>Image</Label><br/>

                        </LabelCont>

                        <InputCont>
                            <Input type= "text" onChange = {handleChange} name = "title" /><br/>

                            <Input type= "text" onChange = {handleChange} name = "cost" /><br/>

                            <Select name= "category" onChange = {handleChange} >
                                <option value= "fruits">Fruits</option>    
                                <option value="vegetables">Vegetables</option>
                                <option value="provisions">Provisions</option>
                            </Select><br/>

                            <Input type= "file" ref = {imageRef} />
                        </InputCont>
                    </FormCont>

                    <Btn>Submit</Btn>
                </form>
            </Container>
        </>
    )
}
