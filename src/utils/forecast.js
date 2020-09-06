const request = require('request')

const forecast = (latitude, longtitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=eddf8b1621c94b1fefd9a067aa966bbc&query=' + latitude + ',' + longtitude + '&units=f'
    request( {url: url, json: true}, (error,{ body }) => {
        if (error) {
            callback('Unable to connect weather service!', undefined)
        }
        else if (body.error) {
            callback('Unable to find location')
        }
        else {
            callback(undefined, body.current.weather_descriptions[0] + '. \nIt is currently ' + body.current.temperature + '. Feels like ' + body.current.feelslike)
        }
    })
}

module.exports = forecast