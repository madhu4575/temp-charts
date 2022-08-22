import axios from 'axios'

export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'

export const startLogin = (formData,resetForm,props) => {
    return (dispatch) => {
        axios.post('http://localhost:3030/temp-charts/user/login',formData)
            .then((response) => {
                const result = response.data
                console.log(result)
                if(result.hasOwnProperty('errors')){ // Object.keys(result).includes('errors')
                    alert(result.errors)
                }else{
                    alert('Sucessfully logged In')
                    localStorage.setItem('token',result.token)
                    dispatch(isLoggedIn(true))
                    props.history.push('/MainPage')
                    resetForm()
                }
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

export const isLoggedIn = () => {
    return { type: LOG_IN }
}
export const isLoggedOut = () => {
    return { type: LOG_OUT }
}