import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spiner from './Spiner';

class App extends React.Component {
    state = { lat: null, errorMessage: '' };

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({errorMessage: err.message})
        );
    }

    
    render(){

        if (this.state.lat)
            return (
                <div>
                    <SeasonDisplay lat={this.state.lat} />
                </div>      
            );
        if (this.state.errorMessage )
            return (
                <div>Error : {this.state.errorMessage}</div>
            );

        return (
            <Spiner/>
        );

    }
}

ReactDOM.render(
    <App/>, document.querySelector('#root')
)