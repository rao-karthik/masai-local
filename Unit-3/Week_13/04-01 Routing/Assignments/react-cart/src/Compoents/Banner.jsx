import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 60%;
    height: 100px;
    margin: 5px auto;
    border-radius: 5px;
    background: #e0e0e0;
`;

export const Banner = () => {

    const [hidden, setHidden] = React.useState(true);

    const handleHidden = ()=>{
        setHidden(false)
    }

    return (
        <>  
            {
                hidden && <Container>
                Banner
                <div ><i onClick={handleHidden} style= {{cursor: 'pointer'}}  class="fas fa-times"></i></div>
            </Container>
            }
        </>
    )
}
