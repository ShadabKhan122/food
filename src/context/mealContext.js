import React,{createContext,useContext,useEffect,useReducer} from "react";
import { mealReducer } from "../reducers/mealReducers";
import { startFetchCategories } from "../actions/mealActions";
const initialState ={
    categories:[],
    categoryLoading:false,
    categoryError:false,
    categoryMeal:[],
    categoryMealLoading:false,
    categoryMealError:false,

}

const MealContext = createContext({});
export const MealProvider = ({children}) => {
    const [state,dispatch] = useReducer(mealReducer , initialState)

    useEffect(()=>{
        startFetchCategories(dispatch);

    },[])

    return (
        <MealContext.Provider value={{...state,dispatch,startFetchCategories}}>
            {children}
        </MealContext.Provider>
    )
}

export const useMealContext = () => {
    return useContext(MealContext);
}