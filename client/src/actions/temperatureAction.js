import axios from "axios"

export const GET_TEMPERATURES = 'GET_TEMPERATURES'

export const startGetTemperatures = () => {

    return (
        (dispatch) => { 
            axios.get('http://localhost:3030/temp-charts/data-list',{
                headers:{
                    'x-auth':localStorage.getItem('token')
                }
            })
                .then((response) => {
                    const result = response.data
                    console.log(response.data)
                    dispatch(getTemperatures(result))
                })
                .catch((err) => {
                    console.log(err)
                    alert(err.message)
                })
        }
    )
}

const getTemperatures = (data) => {
    return {
        type:GET_TEMPERATURES,
        payload:data
    }
}