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
    //console.log(`called with state ${JSON.stringify(state)} and action ${JSON.stringify(action)}`);
    switch(action.type){
        case "INCREMENT": 
         break;
        // case "DECREMENT": 
        // state = {id: action.payload.id, value:decrement(action.payload)}; break;

        // case "DELETE": 
        // state = {id: action.payload.id, value:handleDelete(action.payload)}; break;

        // case "RESET": 
        // state = resetBtn(); break;

        default : 
    }

    return state;
};