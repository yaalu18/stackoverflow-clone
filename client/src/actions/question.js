import React from "react";
import * as api from '../api';
export const askQuestion=(questionData,navigate)=>async (dispatch)=>{
    try{
        const {data}=await api.postQuestion(questionData)
        dispatch({type:"POST_QUESTION",payload:data})
        navigate('/')
    }
    catch(error){
        console.log(error)
    }
}
export const fetchAllQuestions=()=>async(dispatch)=>{
    try{
        console.log("im dispatching fetchAllQuestions")
        const {data}=await api.getAllQuestions()
        dispatch({type:'FETCH_ALL_QUESTION',payload:data})
    }catch(error){
        console.log(error)
    }
}