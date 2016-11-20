export default {
    hotels: [],
    numAjaxCallsInProgress: 0,
    sortBy: 'price',
    filters: {
        price: {
            max: 300,
            min: 100,
            value: 220
        },
        rating: {
            max: 10,
            min: 0,
            value: 2
        },
        distance: {
            max: 50,
            min: 0,
            value: 5
        }
    }
};