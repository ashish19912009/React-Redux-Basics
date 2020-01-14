
const initialState = {
    results:[]
}

const reducer = (state = initialState, action) => {
    switch(action.type)
    { 
        case('STORE_RESULT'):   return{
                                ...state,
                                results: state.results.concat({id: new Date(), value: action.result})
                            }
        case('DELETE_RESULT'):   
                                // const id = 2;
                                // const newArr = [...state.results];
                                // newArr.splice(id,1);
                                const updatedArr = state.results.filter(el => el.id !== action.id)
                                return{
                                    ...state,
                                    results: updatedArr
                                }
    }
    return state;
};

export default reducer;