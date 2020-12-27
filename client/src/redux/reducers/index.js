import {combineReducers} from "redux"
import {connectRouter} from "connected-react-router"


//reducers 재사용
const createRootReducer = (history) => combineReducers({
        router: connectRouter(history),
});

export default createRootReducer;
