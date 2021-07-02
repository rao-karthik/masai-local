import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { indGetTodoFailure, 
         indGetTodoRequest, 
         indGetTodoSuccess, 
         toggleTodoRequest, 
         toggleTodoSuccess, 
         toggleTodoFailure, 
         deleteTodoRequest, 
         deleteTodoSuccess, 
         deleteTodoFailure,
         indTodoDetails,
         handleToggle,
         handleDelete, 
         getTodos} from '../Redux/app/action';
import { indTodoData, toggleStatus, deleteData } from './apiData';
import styled from 'styled-components';
import { Link, useHistory, useParams } from 'react-router-dom';

const Container = styled.div`
    width: 460px;
    margin: auto;
    padding: 20px 40px;
    height: 140px;
    font-size: 20px;
    margin: 10px auto;
    background: #212121;
    color: white;
    border-radius: 10px;
`;

const IntDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
`;

const Btn = styled.button`
    width: 120px;
    height: 30px;
    background: #00e676;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    margin: 10px 20px;
`;

const Loading = styled.div`
    font-size: 50px;
    margin-top: 350px;
`;

export const IndTodo = () => {

    const dispatch = useDispatch();
    const indTodo = useSelector(state=> state.app.indTodo);
    const isLoading= useSelector(state=> state.app.isLoading);
    const isError= useSelector(state=> state.app.isError);
    const { id } = useParams();

    const history = useHistory();

    const handleGoBack = ()=>{
            history.push('/');
    }

    const handleToggleTodo = (id, status)=>{
        const payload = {
            id,
            status
        }
        dispatch(handleToggle(payload))
    }
    

    // const handleDelete = (id)=>{
    //     dispatch(deleteTodoRequest())

    //     deleteData(id)
    //     .then(res=>{
    //         dispatch(deleteTodoSuccess(res.data));
    //         history.push('/')
    //     })
    //     .catch(err=>{
    //         dispatch(deleteTodoFailure(err))
    //     })
    // }

    const handleDeleteTodo = (id)=>{
        dispatch(handleDelete(id));
        history.push('/')
        setTimeout(()=>{
            dispatch(getTodos())
        },1000)
    }

    useEffect(()=>{
        dispatch(indTodoDetails(id))    ;
    }, [])
    
    return (
        isLoading ? <Loading>...loading</Loading> :
        isError ? <Loading>Something Went Wrong</Loading> :
        <div>
            <Container>
                <IntDiv>
                    <p>Todo: {indTodo.title}</p>
                    <p>Status: {indTodo.status ? "Done" : "Not Done"}</p>
                </IntDiv>
                <div>
                    <Btn onClick={()=>handleToggleTodo(id, indTodo.status)} style={{marginLeft:'0'}} >Mark {indTodo.status ? "Not Done" : "Done"}</Btn>
                    <Btn onClick={()=>handleDeleteTodo(id)} >Delete</Btn>
                    <Link to={`/todo/${id}/edit`} ><Btn style={{marginRight:'0'}}>Edit Todo</Btn></Link>
                </div>
            </Container>
            <Btn onClick={handleGoBack} >Go Back</Btn>
        </div>
    )
}
