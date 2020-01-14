
const initialState = {
    counter: 0,
    results:[]
}

const reducer = (state = initialState, action) => {
    switch(action.type)
    {
        case('INCREMENT') : 
                            const temp = Object.assign({},state);
                            temp.counter = state.counter + 1;
                            return temp;
        case('DECREMENT') : return {
                            ...state,
                            counter: state.counter - 1
                            }
        case('ADD')       : return{
                            ...state,
                            counter: state.counter + action.value
                            }
        case('SUB')       : return{
                            ...state,
                            counter: state.counter - action.value
                            } 
        case('STORE_RESULT'):   return{
                                ...state,
                                results: state.results.concat({id: new Date(), value: state.counter})
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