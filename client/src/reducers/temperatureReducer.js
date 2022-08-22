import { GET_TEMPERATURES } from "../actions/temperatureAction"

const initialTemperatureValue = {
    data: []
}

const temperatureReducer = (state = initialTemperatureValue, action) => {
    switch (action.type) {
        case (GET_TEMPERATURES): {
            return { ...state, data: [...action.payload] }
        }
        default: {
            return { ...state }
        }
    }
}

export default temperatureReducer