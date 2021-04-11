import { createStore } from 'redux'

function stocks(state = [], action) {

    if (action.type === 'ADD_STOCK') {
        return state.concat([action.object]);

    } else if (action.type === 'REMOVE_STOCK') {
        return state.filter((item, index) => {
            return index !== action.index;
        });
        
    } else if (action.type === 'CLEAR_STOCKS') {
        return [];
    }
    else {
        return state;
    }
    
};

const Store = createStore(stocks);

export default Store;