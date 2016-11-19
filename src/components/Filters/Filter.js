import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import FontAwesome from 'react-fontawesome';

const Filter = ({name, title, icon, filter, handler}) => {
    return (
        <div className={"filter-view " + name}>
            <div className="filter-title">
                <FontAwesome name={icon} className="filter-title-icon" />
                <span>{title}</span>
            </div>
            <ReactBootstrapSlider
                value={filter.value}
                slideStop={handler}
                max={filter.max}
                min={filter.min}
                orientation="horizontal"
            />
        </div>
    );
};

Filter.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    filter: PropTypes.object.isRequired,
    handler: PropTypes.func.isRequired
};

export default Filter;