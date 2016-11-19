import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as hotelsActions from '../../actions/hotelsActions';
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
        const { filters } = this.props;

        return this.props.hotels.filter(hotel => {
            return hotel.offers[0].totalRate <= filters.price.value && hotel.guestVote >= filters.rating.value;
        })
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
    filters: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        hotels: state.hotels,
        filters: state.filters
    };
}

function mapDispatchToProps(dispatch) {
    return {
        hotelsActions: bindActionCreators(hotelsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelsView);