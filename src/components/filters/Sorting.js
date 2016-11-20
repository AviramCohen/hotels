import React from 'react';

const Sorting = ({sortBy, hotelsCount, sortHandler}) => {
    const greatDealsCount = hotelsCount > 0 ? parseInt((hotelsCount/4)+1) : 0;

    return (
        <div className="sorting-results-container">
            <span className="sorting-text">Sort by</span>
            <select className="select-box" onChange={sortHandler} defaultValue={sortBy}>
                <option value="price">Best Price</option>
                <option value="rating">Higher Rating</option>
            </select>
            <span className="sorting-text">{hotelsCount} hotels,</span>
            <span className="sorting-text best-deals">{greatDealsCount} with great deals</span>
        </div>
    );
};

Sorting.propTypes = {
    sortBy: React.PropTypes.string.isRequired,
    hotelsCount: React.PropTypes.number.isRequired,
    sortHandler: React.PropTypes.func.isRequired
};

export default Sorting;