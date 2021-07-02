import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { specificData } from './apiData';

export const RecipePage = () => {

    const [recData, setRecData] = React.useState({});

    const {userId} = useParams();

    const history = useHistory();

    const recipeDetails = ()=>{
        specificData(userId)
        .then(res=>{
            console.log(res.data.meals[0])
            setRecData(res.data.meals[0]);
        })
    }

    const handleGoBack = ()=>{
        if(history.length > 1){
            history.go(-1);
        }
        else {
            history.push('./home');
        }
    }

    React.useEffect(()=>{
        recipeDetails();
        console.log(recData)
    },[])
    
    return (
        <div>
            <p><span style={{fontWeight: "700"}}>Instructions:</span> {recData.strInstructions}</p>
            <button onClick= {handleGoBack} >Go Back</button>
        </div>
    )
}
