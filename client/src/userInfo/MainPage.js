import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { startGetTemperatures } from '../actions/temperatureAction'
import TemperatureChart from '../components/TemperatureChart'

const MainPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startGetTemperatures())
    },[dispatch])

    return (
        <div>
            <h1>MainPage</h1>
            
            <TemperatureChart />

        </div>
    )
}

export default MainPage