import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router"
import authReducer from "./authReducer";


//reducers 재사용
const createRootReducer = (history) => combineReducers({
        router: connectRouter(history),
        auth: authReducer,
});

export default createRootReducer;
