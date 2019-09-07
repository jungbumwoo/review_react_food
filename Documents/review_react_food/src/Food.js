import React from "react";
import PropTypes from 'prop-types';
import "./Food.css";

function Food({ publisher, title, poster, social_rank}) {
    return (
        <div className="food">
            <img src={poster} alt={title} title={title}/>
            <div className="food__data">
                <h3 className="food__title" style={{backgroundColor: "orange"}}>{title}</h3>
                <h5 className="food_publisher">- {publisher}</h5>
                <p className="food__rank">{social_rank}</p>
            </div>
        </div>
    )
};

Food.propTypes = {
    publisher: PropTypes.string,
    title: PropTypes.string,
    image_url: PropTypes.string,
    recipe_id: PropTypes.string
}

export default Food;