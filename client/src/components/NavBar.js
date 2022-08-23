import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
// import Alert from 'react-bootstrap/Alert'


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
        alert("Logged Out")
        
    }

    return (
        <div>
            {(loggedIn) && (<Button variant='secondary' onClick={handleLogOut}>Logout</Button>)}
        </div>
    )
}

export default withRouter(Navbar)