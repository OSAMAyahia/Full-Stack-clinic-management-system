

const init = { }
export const DoctorApoointmetReducer=(state=init,action)=>{
    switch(action.type){
        case 'DOCTORADDAPOINTMENT':
            return ({...state, applist:action.payload})
        case 'DOCTORGETPOINTMENT':
            return ({...state, applist:action.payload})


        default:
            return state
    }

}

 