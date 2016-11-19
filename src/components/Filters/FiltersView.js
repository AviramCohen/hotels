import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as filtersActions from '../../actions/filtersActions';
import Filter from '../filters/Filter';

class FiltersView extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.onPriceValueChange = this.onPriceValueChange.bind(this);
        this.onRatingValueChange = this.onRatingValueChange.bind(this);
        this.onDistanceValueChange = this.onDistanceValueChange.bind(this);
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

    render() {
        return (
            <div className="filters">
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
        );
    }
}

FiltersView.propTypes = {
    price: React.PropTypes.object,
    rating: React.PropTypes.object,
    distance: React.PropTypes.object,
    filtersActions: React.PropTypes.object
};

function mapStateToProps(state, ownProps) {
    return {
        price: state.filters.price,
        rating: state.filters.rating,
        distance: state.filters.distance
    };
}

function mapDispatchToProps(dispatch) {
    return {
        filtersActions: bindActionCreators(filtersActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FiltersView);