

const init = { }
export const PatientRecordReducer=(state=init,action)=>{
    switch(action.type){
        case 'PATIENTCREATERECORD':
            return ({...state, applist:action.payload})
        case 'DOCTORGETALLERECORDS':
            return ({...state, applist:action.payload})
        case 'PATIENTGETONERECORDS':
            return ({...state, applist:action.payload})
        

        default:
            return state
    }

}

 