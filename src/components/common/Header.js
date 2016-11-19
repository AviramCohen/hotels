import React from 'react';

const Header = ({}) => {
    return (
        <div id="header" className="row">
            <div className="container">
                <h1 className="header-title">FINDHOTEL</h1>
            </div>
        </div>
    );
};

Header.propTypes = {
    //myProp: PropTypes.type.isRequired
};

export default Header;