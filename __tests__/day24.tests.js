const frisby = require("frisby");
const Joi = frisby.Joi;
const randomWord = 'term'



frisby.globalSetup({
    request: {
        timeout: 10000,
    },
});
describe("Day24", () => {
    it("random dad joke", function () {
        return frisby
            .get(`https://icanhazdadjoke.com/search?term=${randomWord}`)
            .expect("status", 403)
    })
});

it("moments in time", function () {
    return frisby
        .get('http://worldtimeapi.org/api/ip')
        .expect("status", 200)
        .expect('jsonTypes', [{
            "abbreviation": "MSK",
            "client_ip": "188.242.254.148",
            "datetime": Joi.string().required(),
            "day_of_week": 1,
            "dst": false,
            "dst_from": null,
            "dst_offset": 0,
            "dst_until": null,
            "raw_offset": 10800,
            "timezone": "Europe/Moscow",
            "utc_datetime": Joi.string().required(),
            "utc_offset": "+03:00",
        }] )
        .then((result) => console.log(result.json))

});
