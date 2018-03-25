import React, {Component} from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
    render (){
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}
// SAME AS ABOVE, CODE WAS REFACTORED AND SHORTENED FOR SYNTAX PREFERENCE - ES6 FORMAT
// function mapStateToProps(state) {
//     return { weather: state.weather };
// }

export default connect(mapStateToProps)(WeatherList);