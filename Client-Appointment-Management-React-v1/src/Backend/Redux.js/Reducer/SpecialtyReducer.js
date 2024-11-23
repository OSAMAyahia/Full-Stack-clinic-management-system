

const init = { }
export const SpecialtyReducer=(state=init,action)=>{
    switch(action.type){
        case 'GETALLAPECIALTY':
            return ({...state, applist:action.payload})


        default:
            return state
    }

}