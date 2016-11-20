import React from 'react';
import FontAwesome from 'react-fontawesome';
import HotelOfferProviders from './HotelOfferProviders';
import _ from 'lodash';

const HotelOffer = ({offers}) => {
    const offersSorted = _.cloneDeep(offers).sort(
        function(a, b) {
            return a.totalRate - b.totalRate;
        }
    );

    const mainOffer = offersSorted[0];

    return (
        <div className="hotel-offer-container">
            <div className="offer-old-rate">
                <FontAwesome name="euro" className="offer-rate-icon" />
                <del className="offer-old-rate-text">{parseInt(mainOffer.totalRate*1.1)}</del>
            </div>
            <h3 className="offer-new-rate">
                <FontAwesome name="euro" className="offer-rate-icon" />
                <span className="offer-new-rate-text">{mainOffer.totalRate}</span>
            </h3>
            <div className="offer-is-cancellation">
                {mainOffer.hasFreeCancelation && <span>Free cancellation</span>}
            </div>
            <button className="offer-book-button">
                {mainOffer.provider.name} <FontAwesome name="long-arrow-right" className="offer-book-button-arrow" />
            </button>
            <HotelOfferProviders
                offers={offersSorted} />
            <button className="offer-details-button">
                <span>Show details</span>
                <FontAwesome name="caret-down" className="offer-details-icon" />
            </button>
        </div>
    );
};

HotelOffer.propTypes = {
    offers: React.PropTypes.array.isRequired
};

export default HotelOffer;