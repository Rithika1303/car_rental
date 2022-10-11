import axios from 'axios';
import { message } from 'antd';
export const getallcars=()=> async dispatch=>{
    dispatch({type: 'LOADING', payload: true})

    try{
        const response = await axios.get('/api/cars/getallcars')
        dispatch({type: 'GET_ALL_CARS',payload:response.data})
        dispatch({type: 'LOADING', payload: false})
    } catch(error){
        console.log(error)
        dispatch({ type: 'LOADING', payload: false})
    }
}

export const HostingCar=(reqOb)=> async dispatch=>{
    dispatch({type: 'LOADING', payload: true})

    try{
        await axios.post('/api/cars/HostCar', reqOb)
        message.success('hosting success')   
        setTimeout(()=>{
            window.location.href='/'
        },500);     
        dispatch({type: 'LOADING', payload: false})
    } catch(error){
        console.log(error)
        message.error('something went wrong')
        dispatch({ type: 'LOADING', payload: false})
    }
}