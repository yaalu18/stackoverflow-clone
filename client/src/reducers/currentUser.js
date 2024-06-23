const currentUserReducer = (state = null, action) => {
    switch (action.type) {
      case "FETCH_CURRENT_USER":
        console.log('I am inside Fetch_current_user')
        console.log('fetch_current user dara:',action)
        return action.payload;
      default:
        return state;
    }
  };
  
  export default currentUserReducer;