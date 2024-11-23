

const init = { }
export const PatientGetHisAppointment=(state=init,action)=>{
    switch(action.type){
        case 'PATIENTGETHISAPOINTMENT':
            return ({...state, applist:action.payload})
        default:
            return state
    }

}

 