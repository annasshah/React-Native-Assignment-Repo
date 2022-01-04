const INITIAL_STATE = {
    type:'USERDATA',
    user:false,
    userName:''
    

    
};

const UserDataReducer = (state = INITIAL_STATE, action) => {
    
    if(action.type === state.type){
        return {...state,...action}
    }
    else{
        return state
    }
}

export default UserDataReducer;