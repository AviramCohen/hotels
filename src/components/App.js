import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from './common/Header';

class App extends React.Component {
    render() {
        return (
            <div id="main-app" className="container-fluid">
                <Header>My app header</Header>
                {/* create loading */}
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

function mapStateToProps (state) {
    return {
        loading: state.ajaxCallsInProgress > 0
    };
}

export default connect(mapStateToProps)(App);