const increment = obj => {
    return obj.value+1;
};

// const decrement = obj => {
//    return obj.value-1;
// };

// const handleDelete = obj => {
//     return obj;
// };

// const resetBtn = () => {
//     return this.state.counters.map(c => {
//         c.value = 0;
//         return c;
//     });
// };

export default (state={}, action) =>{
    switch(action.type){
        case "INCREMENT": 
        return Object.assign({}, state, { id: action.payload.id, value: action.payload.value+1 });
//        [...state, {id: action.id, value: action.value+1}];
         break;
        default : 
    }

    return state;
};