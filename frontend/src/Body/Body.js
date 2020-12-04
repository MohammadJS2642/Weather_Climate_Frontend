import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Body.css';
import WeatherWidget from '../Weather_Widget/WeatherWidget';

function BodySite() {
    // i should this 
    // const [myDiv, setStateMyDiv] = useState(initialState);

    return (
        <div className="background_body">
            <WeatherWidget />
        </div>
    );
}


// i just a test class base react
class MyBody extends Component {

    render() {
        // function BodySite() {
        //     // i should this 
        //     // const [myDiv, setStateMyDiv] = useState(initialState);

        //     return (
        //         <div className="background_body"></div>
        //     );
        // };

        return (
            <div>
                <BodySite />
            </div>
        )
    }
}
//*******************************


// export default MyBody;
export default BodySite;