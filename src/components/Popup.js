import { React, useState } from 'react'
import { connect } from "react-redux";

import { updateCity, fetchTemperature } from '../redux/temperature/t-act'

const Popup = ({ updateCity, fetchTemperature }) => {

    const [cityName, setCityName] = useState('');
    const onSubmit = () => {
        updateCity(cityName)
        fetchTemperature();
    }

    const handleChange = event => {
        console.log('sdhfaksdfhbksd', event.target.value, cityName)
        setCityName(event.target.value);

    }

    return (

        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Enter City Name
</button>


            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">City Name</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <input placeholder="type city here" value={cityName} onChange={handleChange} autoFocus={true} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={onSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )


}

const mapDispatchToProps = dispatch => {
    return {
        updateCity: city => dispatch(updateCity(city)),
        fetchTemperature: () => dispatch(fetchTemperature())
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Popup)
