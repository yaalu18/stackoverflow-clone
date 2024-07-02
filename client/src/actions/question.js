import React from "react";
import * as api from '../api';
export const askQuestion=(questionData,navigate)=>async (dispatch)=>{
    try{
        const {data}=await api.postQuestion(questionData)
        dispatch({type:"POST_QUESTION",payload:data})
        dispatch(fetchAllQuestions())
        navigate('/')
    }
    catch(error){
        console.log(error)
    }
}
/*export const fetchAllQuestions=()=>async(dispatch)=>{
   try{
    // Handle response data
        console.log("im dispatching fetchAllQuestions")
        const {data}=await api.getAllQuestions()
        dispatch({type:'FETCH_ALL_QUESTION',payload:data})
   }
    catch(error){
        console.log(error)
    }
}*/
export const fetchAllQuestions = () => async (dispatch,getState) => {
    try {
        console.log("Dispatching fetchAllQuestions");
        const { data } = await api.getAllQuestions({
            headers: {
                'Cache-Control': 'no-cache', // Disable caching headers
                'Pragma': 'no-cache'
            }
        });
        console.log('Fetched questions:', data); // Print fetched questions to console
        dispatch({ type: 'FETCH_ALL_QUESTION', payload: data });
        //dispatch({ type: 'FETCH_CURRENT_USER', payload: getState() }); // Example of using getState()
        console.log('INSIDE fetchAllQuestions:', getState());
    } catch (error) {
        console.error('Error fetching questions:', error);
        // Optionally handle error
    }
};
