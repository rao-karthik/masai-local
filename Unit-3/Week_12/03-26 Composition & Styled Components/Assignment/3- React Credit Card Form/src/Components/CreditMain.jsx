import React from 'react'
import { CreditComp } from './CreditComp';
import { CreditOutput } from './CreditOutput';
import styled from 'styled-components';

const Image = styled.img`
    width:100%;
    height:100%;
    opacity: 0.7;
`;

export const CreditMain = () => {
    return (
        <div>
            <CreditComp>
                <CreditOutput image = {
                    <Image src = "https://www.hapo.org/images/default-source/new-site/visa-cards/visa-cards-rgb_pink.png?sfvrsn=929c3a20_2" />
                } />
            </CreditComp>
        </div>
    )
}
