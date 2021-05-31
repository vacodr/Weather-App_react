import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTemperature } from '../redux/temperature/temperatureActions'

const WeatherView = ({ tempData, fetchTemperature }) => {
    useEffect(() => {
        fetchTemperature()
    }, [fetchTemperature])



    const Loading = () => {
        return (
          <div className='spinner-border text-white' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
        );
      };
    
      const Weather = () => {
        return (
          <div className='p-2 d-flex flex-column align-items-center'>
            {" "}
            <h1 className='text-light'>{tempData.temp} Celcius</h1>
            <p className='text-white-50'>Rajasthan , Jaipur, India.</p>
          </div>
        );
      };
    
      return (
        <div
          style={{
            height: "300px",
            display: "flex",
            justifyContent: "center",
            paddingTop: "50px",
          }}
        >
          {tempData.loading ? <Loading /> : <Weather />}
        </div>
      );

}

const mapStateToProps = state => {
    return {
        tempData: state.temperature
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTemperature: () => dispatch(fetchTemperature())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeatherView)

