import React from 'react'
import styled from 'styled-components';

const Head = styled.h3`
    color: grey;
`;

const Label = styled.label`
    font-size: 10px;
    text-align: left;
    color: grey;
    margin-right: 22px;
`;

const Input = styled.input`
    width: 80%;
    height: 25px;
    border: none;
    border-bottom: 2px solid pink;
    font-size: 16px;
    outline: none;
    margin-top: 10px;
`;

const Select = styled.select`
    border: none;
    width: 60px;
    border-bottom: 2px solid pink;
    font-size: 16px;
    margin-top: 10px;
    `;
    
    const Expiry = styled.div`
    display: flex;
    `;
    
    const CvvInp = styled.input`
    width: 50px;
    border: none;
    font-size: 16px;
    border-bottom: 2px solid pink;
    outline: none;
    margin-top: 9px;
`;

const SbtBtn = styled.button`
    width: 120px;
    height: 35px;
    margin-left: 55px;
    margin-top:30px;
    background: pink;
    outline: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const expMonth = [
    {
        value: 1,
        name: 1
    },
    {
        value: 2,
        name: 3
    },
    {
        value: 3,
        name: 3
    },
    {
        value: 4,
        name: 4
    },
    {
        value: 5,
        name: 5
    },
    {
        value: 6,
        name: 6
    },
    {
        value: 7,
        name: 7
    },
    {
        value: 8,
        name: 8
    },
    {
        value: 9,
        name: 9
    },
    {
        value: 10,
        name: 10
    },
    {
        value: 11,
        name: 11
    },
    {
        value: 12,
        name: 12
    }
];

const expYear = [
    {
        value: 2021,
        name: 2021
    },
    {
        value: 2022,
        name: 2022
    },
    {
        value: 2023,
        name: 2023
    },
    {
        value: 2024,
        name: 2024
    },
    {
        value: 2025,
        name: 2025
    },
    {
        value: 2026,  
        name: 2026   
    },
    {
        value: 2027,
        name: 2027
    },
    {
        value: 2028,
        name: 2028
    },
    {
        value: 2029,
        name: 2029
    },
];

export const CreditForm = ({handleChange}) => {
    return (
        <div>
            <Head>Payment Details</Head>
            <form>
                <Label>
                    CARDHOLDER NAME <br/>
                    <Input type="text" onCHange = {handleChange} />
                </Label><br/><br/>
                <Label>
                    CARD NUMBER <br/>
                    <Input type="number" onCHange = {handleChange} />
                </Label><br/><br/>
                <Expiry>
                    <Label>
                        EXPIRY MONTH <br/>
                        <Select name="expire" id="">
                            {                       
                                expMonth.map(mon=> <option key = {mon.value} value= {mon.value}>{mon.name}</option>)
                            }
                        </Select>
                    </Label>
                    <Label>
                        EXPIRY YEAR <br/>
                        <Select name="expire" id="">
                            {
                                expYear.map(yr=> <option key = {yr.value} value= {yr.value}>{yr.name}</option>)
                            }
                        </Select>
                    </Label>
                    <Label>
                        CVV <br/>
                        <CvvInp type="number" onChange = {handleChange}/>
                    </Label>
                </Expiry>
                <SbtBtn>Submit</SbtBtn>
            </form>
        </div>
    )
}
