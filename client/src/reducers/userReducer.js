import { LOG_IN,LOG_OUT } from "../actions/userActions";

const initialUserState = {
    isLoggedIn : false
}

const userReducer = (state=initialUserState,action) => {
    switch(action.type) {
        case (LOG_IN) : {
            return {...state,isLoggedIn:true}
        }
        case (LOG_OUT) : {
            return {...state,isLoggedIn:false}
        }
        default : {
            return {...state}
        }
    }
}

export default userReducer