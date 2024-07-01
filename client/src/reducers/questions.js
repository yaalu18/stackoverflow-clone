const questionsReducer=(state={data:null},action)=>{
    switch(action.type){
        case "POST_QUESTION":
            //return {...state}
            return {
                ...state,
                data: state.data ? [...state.data, action.payload] : [action.payload]
            };
        case "FETTCH_ALL_QUESTION":
            return {...state,data:action.payload}
           // const response = await api.getAllQuestions(); // Fetch questions from MongoDB
            //dispatch({ type: 'FETCH_ALL_QUESTION', payload: response.data }); // Dispatch action with fetched data
        default:
            return state
    }
        
}
export default questionsReducer