

const init = { }
export const DoctorlistReducer=(state=init,action)=>{
    switch(action.type){
        case 'DOCTORGETAPPLISR':
            return ({...state, applist:action.payload})


        default:
            return state
    }

}