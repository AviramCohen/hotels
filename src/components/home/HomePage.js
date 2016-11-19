import React from 'react';
import FiltersView from '../filters/FiltersView';
import HotelsView from '../hotels/HotelsView';

class HomePage extends React.Component {
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