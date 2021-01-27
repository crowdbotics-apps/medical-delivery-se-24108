import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn53197364Reducer from '../features/SignIn53197364/redux/reducers'
import SignUp22197363Reducer from '../features/SignUp22197363/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn53197364: SignIn53197364Reducer,
SignUp22197363: SignUp22197363Reducer,

});