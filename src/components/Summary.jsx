// import React from 'react'
import PropTypes from "prop-types";
Summary.propTypes = { items: PropTypes.array };

const average = (items) => {
    return (
        items.reduce((prev, items) => prev + items.rating, 0) / items.length
    ).toFixed(2);
};

function Summary({ items }) {
    const review = items.length;
    const rating = average(items);
    return (
        <div className="summary">
            <span className="review">{review} Reviews</span>
            <span className="average">
                Average Rating: {isNaN(rating) ? "0" : rating}
            </span>
        </div>
    );
}

export default Summary;
