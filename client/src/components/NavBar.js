import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { isLoggedIn, isLoggedOut } from '../actions/userActions'

const Navbar = (props) => {
    const loggedIn = useSelector((state) => {
        return state.user.isLoggedIn
    })

    const dispatch = useDispatch()

    useEffect(() => {
        if(localStorage.getItem('token')){
            dispatch(isLoggedIn())
        }
    },[dispatch])

    const handleLogOut = () => {
        localStorage.clear('token')
        dispatch(isLoggedOut())
        props.history.push('/')
    }

    return (
        <div>
            {(loggedIn) && (<button onClick={handleLogOut}>Logout</button>)}
        </div>
    )
}

export default withRouter(Navbar)