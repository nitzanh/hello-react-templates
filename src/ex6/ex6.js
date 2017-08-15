define(['react', './ex6.rt'], function (React, template) {
    'use strict';

    function onCountryChange(e) {
        this.setState({country: e.target.value})
    }

    function onCityChange(e) {
        this.setState({city: e.target.value})
    }

    const countriesToCities = {
            israel: ['Tel Aviv', 'Jerusalem'],
            philippines: ['Manila', 'Cebu City']
        };

    function getCountryNames() {
        return Object.keys(countriesToCities);
    }

    function getCities(country) {
        return countriesToCities[country];
    }

    function shouldDisableSubmit() {
        return this.state.country && this.state.city ? false : true;
    }

    function getInitialState() {
        return {
            country: '',
            city:''
        };
    }

    return React.createClass({
        displayName: 'ex6',
        getInitialState: getInitialState,
        getCountryNames: getCountryNames,
        getCities: getCities,
        onCountryChange: onCountryChange,
        onCityChange: onCityChange,
        shouldDisableSubmit: shouldDisableSubmit,
        render: template
    });
});