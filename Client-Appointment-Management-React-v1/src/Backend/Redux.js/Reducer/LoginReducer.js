

const init = { }
export const LoginReducer=(state=init,action)=>{
    switch(action.type){
        case 'LOGINUSER':
            return ({...state, lodegU:action.data})


        default:
            return state
    }

}