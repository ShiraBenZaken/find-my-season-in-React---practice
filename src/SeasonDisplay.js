import React from 'react';
import './SeasonDisplay.css' ;

const seasonConfig = {
    summer: {
        text: "Let's Hit The Beach",
        icon: "sun"
    },
    winter: {
        text: "Burrr.. It's Chilly",
        icon: "snowflake"
    }
};

const GetSeason =(lat, month)=>{
    if (month > 2 && month < 9) 
        return lat > 0 ? 'summer' : 'winter';
    return lat > 0 ? 'winter' : 'summer';
};

const SeasonDisplay =(props)=> {

    const season = GetSeason(props.lat, (new Date().getMonth()) );
    const {text, icon} = seasonConfig[season];

    return ( 
        <div className={`season-display ${season}`}>
            <i className={`massive ${icon} icon icon-left`} />
            <h1> {text} </h1>
            <i className={`massive ${icon} icon icon-right`} />
        </div>
    );
};

export default SeasonDisplay;