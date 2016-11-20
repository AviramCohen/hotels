import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Hotel from './Hotel';

class HotelsView extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="hotels">
                {this.props.hotels.map(hotel => {
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
    hotels: PropTypes.array.isRequired
};

export default HotelsView;