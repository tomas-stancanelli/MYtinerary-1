import React from 'react';
import './CityComponentStyle.css'

const CityComponent = (props) => {
    return (
        <div>
            <h1>Welcome to City</h1>
            {props &&
            <div>

            <h1>
                {props.cities.cities[props.city.id].name}
            </h1>
                <img className={"img"} src={props.cities.cities[props.city.id].img[props.cities.cities[props.city.id].title]} alt=""/>
            </div> 
            }
        </div>
    );
};

export default CityComponent;