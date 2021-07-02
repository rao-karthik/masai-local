import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserAuthContext } from '../Contexts/UserAuthContextProvider';
import { gender, states, DOB } from './RegisterData';

const Container = styled.div`

`;

const Questions = styled.div`
    display: flex;
    flex-direction: column;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`;

`;

const Input = styled.input`

`;
const Btn = styled.button`
    cursor: pointer;
`;

const Select = styled.select`

`;

export const RegisterItems = () => {

    const [info, setInfo] = React.useState(false);

    const { handleRegInp } = React.useContext(UserAuthContext);

    const handleSwitch = ()=>{
        setInfo(true);
    }
    
    return (
        <>
            <Container>
                {
                    !info ? <Questions>
                        <Label>
                            <Input type="checkbox"/>
                            Can You Attend 90% of the classes?
                        </Label>
                        <Label>
                            <Input type="checkbox"/>
                            Do you have laptop?
                        </Label>
                        <Btn onClick = {handleSwitch} >Continue</Btn>
                    </Questions>
                    :
                    <Info>
                        <Label>
                            Highest Qualification
                            <Input type="text" name="highestQual" onChange={handleRegInp} />
                        </Label>
                        <Label>
                            Passing Year
                            <Input type="text" name="passYr" onChange={handleRegInp} />
                        </Label>
                        <Label>
                            Date of Birth
                            <Select name="day" onChange={handleRegInp} >
                                {
                                    DOB.day.map(date=> <option value={date.value} >{date.date}</option>)
                                }
                            </Select>
                            <Select name="mon" onChange={handleRegInp} >
                                {
                                    DOB.month.map(date=> <option value={date.value} >{date.mon}</option>)
                                }
                            </Select>
                            <Select name="yr" onChange={handleRegInp} >
                                {
                                    DOB.year.map(date=> <option value={date.value} >{date.yr}</option>)
                                }
                            </Select>
                        </Label>
                        <Label>
                            Gender
                            <Select name="gender" onChange={handleRegInp} >
                                {
                                    gender.map(gen=> <option value={gen.value} >{gen.gen}</option>)
                                }
                            </Select>
                        </Label>
                        <Label>
                            State
                            <Select name="state" onChange={handleRegInp} >
                                {
                                    states.map(state=> <option value={state.value} >{state.name}</option>)
                                }
                            </Select>
                        </Label>
                        <Btn><Link to="./register/details" >Register</Link></Btn>
                    </Info>
                }
                
            </Container>
        </>
    )
}
