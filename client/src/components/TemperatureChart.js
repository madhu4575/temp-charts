import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { startGetTemperatures } from '../actions/temperatureAction'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const TemperatureChart = () => {
    
    const temperature = useSelector((state) => {
        return state.temperature.data
    })

    const dispatch = useDispatch()

    const handleGetTemperature = () => {
        dispatch(startGetTemperatures())
    }

    const data = temperature.map((ele) => {
        return ele.temperature.map((e) => {
            console.log(e.time)
            return [e.time,e.degree]
        })
    })

    const options = {
        title :{
            text: 'Temperatures'
        },
        series:[{
            data:data.flat()
        }],
        yAxis:{
            title: {
                text: 'Temperature'
            }
        },
        xAxis: {
            title: {
                text: 'Time'
            }
        }
    }

    return (
        <div>
            <h1> TemperatureChart </h1>

            <button onClick={handleGetTemperature}> GET TEMPERATURES </button>

            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    )

}

export default TemperatureChart