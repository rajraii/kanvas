import { FETCH_START } from "../../config/action.type"
import { FETCH_ERROR, FETCH_SUCCESS } from "../../config/shared/action.type"

export const onFetchStart =()=> {
  return (dispatch)=>{
    dispatch(FETCH_START)
  }
}
export const onFetchError =()=> {
  return (dispatch)=>{
    dispatch(FETCH_ERROR)
  }
}
export const onFetchSuccess =()=> {
  return (dispatch)=>{
    dispatch(FETCH_SUCCESS)
  }
}
