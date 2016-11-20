import React from 'react';
import FiltersView from '../filters/FiltersView';
import HotelsView from '../hotels/HotelsView';

class HomePage extends React.Component {
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
            <div>
                <FiltersView />
                <HotelsView />
            </div>
        );
    }
}

export default HomePage;