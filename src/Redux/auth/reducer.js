
// import * as types from './actionTypes';


const initState={
    isLoading: false,
    isError: false
}


export const reducer=(state= initState, action)=>{
   const {type, payload} = action;

   switch(type){

    default: return state;
   }
}