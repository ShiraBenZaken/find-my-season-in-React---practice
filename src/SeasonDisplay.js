import React from 'react';

const GetSeason =(lat, month)=>{
    if (month > 2 && month < 9) 
        return lat > 0 ? 'Summer' : 'Winter';
    return lat > 0 ? 'Winter' : 'Summer';
}

const SeasonDisplay =(props)=> {

    const season = GetSeason(props.lat, (new Date().getMonth()) )

    return ( 
        <div>
            <h1> {season === 'Winter' ? "Burrr.. It's Chilly" : "Let's Hit The Beach"} </h1>
        </div>
    );
};

export default SeasonDisplay;