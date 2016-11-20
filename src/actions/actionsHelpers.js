import _ from 'lodash';

export function getHotelsMinMaxRate(hotels, type) {
    const valueFunction = type === 'max' ? _.maxBy : _.minBy;

    return valueFunction(
        _.map(
            hotels,
            function(hotel) {
                return valueFunction(
                    hotel.offers,
                    function(value) {
                        return value.totalRate;
                    }
                );
            }
        ),
        function(hotel) {
            return hotel.totalRate;
        }
    ).totalRate;
}