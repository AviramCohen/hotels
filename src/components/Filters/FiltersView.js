import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as filtersActions from '../../actions/filtersActions';
import * as sortByActions from '../../actions/sortByActions';
import Filter from '../filters/Filter';
import Sorting from '../filters/Sorting';

class FiltersView extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.onPriceValueChange = this.onPriceValueChange.bind(this);
        this.onRatingValueChange = this.onRatingValueChange.bind(this);
        this.onDistanceValueChange = this.onDistanceValueChange.bind(this);
        this.onSortByChange = this.onSortByChange.bind(this);
    }

    onPriceValueChange(value) {
        this.props.filtersActions.setFilterValue('price', value);
    }

    onRatingValueChange(value) {
        this.props.filtersActions.setFilterValue('rating', value);
    }

    onDistanceValueChange(value) {
        this.props.filtersActions.setFilterValue('distance', value);
    }

    onSortByChange(event) {
        this.props.sortByActions.setSortByValue(event.target.value);
    }

    render() {
        return (
            <div className="filters">
                <div className="filters-container">
                    <Filter
                        name="price"
                        title="Max Price"
                        icon="euro"
                        filter={this.props.price}
                        handler={this.onPriceValueChange}
                    />

                    <Filter
                        name="rating"
                        title="Min Rating"
                        icon="smile-o"
                        filter={this.props.rating}
                        handler={this.onRatingValueChange}
                    />

                    <Filter
                        name="distance"
                        title="Distance from city center"
                        icon="location-arrow"
                        filter={this.props.distance}
                        handler={this.onDistanceValueChange}
                    />
                </div>
                <Sorting
                    sortBy={this.props.sortBy}
                    hotelsCount={this.props.hotelsCount}
                    sortHandler={this.onSortByChange} />
            </div>
        );
    }
}

FiltersView.propTypes = {
    price: React.PropTypes.object,
    rating: React.PropTypes.object,
    distance: React.PropTypes.object,
    sortBy: React.PropTypes.string,
    hotelsCount: React.PropTypes.number,
    filtersActions: React.PropTypes.object,
    sortByActions: React.PropTypes.object
};

function mapStateToProps(state, ownProps) {
    return {
        price: state.filters.price,
        rating: state.filters.rating,
        distance: state.filters.distance,
        hotelsCount: state.hotels.length,
        sortBy: state.sortBy
    };
}

function mapDispatchToProps(dispatch) {
    return {
        filtersActions: bindActionCreators(filtersActions, dispatch),
        sortByActions: bindActionCreators(sortByActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FiltersView);