import { combineReducers } from "redux";
import NewsDataReducer from "./NewsDataReducer";
import UserDataReducer from "./UserDataReducer";
import ActiveButtons from "./ActiveButtons";
import LayoutView from "./LayoutView";
import BottomMenuState from "./BottomMenuState";


const reducers = combineReducers({
    NewsDataReducer,
    UserDataReducer,
    ActiveButtons,
    LayoutView,
    BottomMenuState
  });


export default reducers