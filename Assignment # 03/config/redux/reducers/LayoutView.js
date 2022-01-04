const INITIAL_STATE = {
    type:'LAYOUTVIEW',
    listView:false
    
};

const LayoutView = (state = INITIAL_STATE, action) => {
    
    if(action.Type === "LAYOUTVIEW"){
        // console.log(action.Type);
        return {...state,...action}
    }
    else{
        return state
    }
    
}

export default LayoutView;