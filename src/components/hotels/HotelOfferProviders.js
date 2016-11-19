import React from 'react';
import FontAwesome from 'react-fontawesome';

const HotelOfferProviders = ({offers}) => {
    return (
        <ul className="offer-providers list-group">
            {offers.map((offer, index) => {
                if(index > 0) {
                    return (
                        <li className="list-group-item" key={"offer" + index}>
                            <div className="offer-provider-name">
                                <span>{offer.provider.name}</span>
                            </div>
                            <div className="offer-provider-price">
                                <FontAwesome name="euro" className="offer-provider-icon"/>
                                <span>{offer.totalRate}</span>
                            </div>
                        </li>
                    )
                }
            })}
        </ul>
    );
};

HotelOfferProviders.propTypes = {
    offers: React.PropTypes.array.isRequired
};

export default HotelOfferProviders;