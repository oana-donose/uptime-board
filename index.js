const key = 'u630058-e28e0007af00faaf27512f11';

console.log(key);

const rp = require('request-promise');

var options = {
    method: 'POST',
    uri: 'https://api.uptimerobot.com/v2/getMonitors',
    body: {
          api_key: key,
          all_time_uptime_ratio: 1,
          response_times_average: 1,
    },
  json: true // Automatically stringifies the body to JSON
};
rp(options)
.then(data => console.log(data));