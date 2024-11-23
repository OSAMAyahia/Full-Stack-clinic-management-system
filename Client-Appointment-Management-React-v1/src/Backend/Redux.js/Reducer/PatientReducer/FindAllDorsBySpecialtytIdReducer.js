

const init = { }
export const DorsBySpecialtytIdActionReducer=(state=init,action)=>{
    switch(action.type){
        case 'GETALLDORSBYSPECIALITY':
            return ({...state, applist:action.payload})
        default:
            return state
    }

}

 