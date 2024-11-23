

const init = { }
export const DoctorReportReducer=(state=init,action)=>{
    switch(action.type){
        case 'DOCTORCREATEREPORT':
            return ({...state, applist:action.payload})
        case 'DOCTORVIEWALLREPORT':
            return ({...state, applist:action.payload})
        case 'PATIENTVIEWHISREPORT':
            return ({...state, applist:action.payload})


        default:
            return state
    }

}