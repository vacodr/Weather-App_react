import axios from 'axios'
import {
    FETCH_TEMPERATURE_REQUEST,
    FETCH_TEMPERATURE_SUCCESS, 
    FETCH_TEMPERATURE_FAILURE,
    UPDATE_CITY
} from './Types'

export const fetchTemperatureRequest = () => {
    return {
        type: FETCH_TEMPERATURE_REQUEST
    }
}

export const fetchTemperatureSuccess = temp => {
    return {
        type: FETCH_TEMPERATURE_SUCCESS,
        payload: temp
    }
}

export const fetchTemperatureFailure = error => {
    return {
        type: FETCH_TEMPERATURE_FAILURE,
        payload: error
    }
}

export const fetchTemperature = () => {
    console.log('fbskahfdks')
    return (dispatch, getState) => {
        const city = getState().temperature.city
        console.log(getState())
        if(city){
            dispatch(fetchTemperatureRequest())
            axios
            .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a631e386d2fc47702bcfd64f65d9fcb3&units=metric`)
            .then(respose => {
                 const temp = respose.data.main.temp
                 dispatch(fetchTemperatureSuccess(temp))
             })
             .catch(error => {
                 const errorMsg = error.message
                 dispatch(fetchTemperatureFailure(errorMsg))
             })
        }
    }
}

export const updateCity = city => {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}
