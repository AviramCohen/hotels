import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as hotelsActions from '../../actions/hotelsActions';
import _ from 'lodash';
import Hotel from './Hotel';

class HotelsView extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.filterHotels = this.filterHotels.bind(this);
    }

    componentDidMount() {
        this.props.hotelsActions.loadHotels();
    }

    filterHotels() {
        const { filters, sortBy } = this.props;

        return this.props.hotels.filter(hotel => {
            const minOffer = _.minBy(
                hotel.offers,
                function(offer) {
                    return offer.totalRate;
                }
            ).totalRate;

            return minOffer <= filters.price.value && hotel.guestVote >= filters.rating.value;
        }).sort(
            function(a, b) {
                if(sortBy === 'rating') {
                    return b.guestVote - a.guestVote;
                } else {
                    const aRate = _.minBy(a.offers, function (offer) {
                            return offer.totalRate;
                        }).totalRate,
                        bRate = _.minBy(b.offers, function (offer) {
                            return offer.totalRate;
                        }).totalRate;

                    return aRate - bRate;
                }
            }
        );
    }

    render() {
        return (
            <div className="hotels">
                {this.filterHotels().map(hotel => {
                    return (
                        <Hotel
                            key={hotel.name}
                            hotel={hotel}
                        />
                    );
                })}
            </div>
        );
    }
}

HotelsView.propTypes = {
    hotels: PropTypes.array.isRequired,
    hotelsActions: PropTypes.object.isRequired,
    filters: PropTypes.object.isRequired,
    sortBy: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        hotels: state.hotels,
        filters: state.filters,
        sortBy: state.sortBy
    };
}

function mapDispatchToProps(dispatch) {
    return {
        hotelsActions: bindActionCreators(hotelsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelsView);