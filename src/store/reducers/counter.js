
const initialState = {
    counter: 0,
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
    }
    return state;
};

export default reducer;