import defaultCartValues from './defaultCart';

const increment = (state, changedStated) => {
    return state.map(c => {
        c.value = c.id === changedStated.id ? c.value+1: c.value;
        return c;
    });
};

const decrement = (state, changedStated) => {
    return state.map(c => {
        if(c.id === changedStated.id && c.value > 0){
            c.value = c.value-1;
        }
        return c;    
    });
};

const deleteHandle = (state, changedStated) => {
    return state.filter(c => c.id !== changedStated.id);
};

const resetBtn = (state, changedStated) => {
    return state.map(c => {
        c.value = c.id === changedStated.id ? 0 : c.value;
        return c;
    });
};

const  initialState = defaultCartValues();

export default (state=initialState, action) =>{
    switch(action.type){
        case "INCREMENT": 
            state = increment(state, action.payload);
        break;
        case "DECREMENT": 
            state = decrement(state, action.payload);
        break;
        case "DELETE": 
            state = deleteHandle(state, action.payload);
        break;
        case "RESET": 
            state = resetBtn(state, action.payload);
        break;
        default : 
    }

    return state;
};