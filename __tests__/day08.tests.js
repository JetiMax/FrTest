const frisby = require("frisby");
const {Joi} = require("frisby");


describe(" day 8", () => {
    it ('get random user', function () {
        return frisby
            .get('https://randomuser.me/api')
            .expect('status', 200)
            .then(function(res){
                var data = JSON.parse(res['_body']);
                console.log(data.results[0]['gender']['female']);
                expect(data.results[0]['gender']).toBe('female');
            })
    });
});

describe("day 8", () => {
    it(" female gender", async function () {
        const result = await frisby
            .get("https://randomuser.me/api/?gender=female")
            .expect("status", 200)
            .expect("jsonTypes", "results.0.gender", Joi.string().valid("female"));
        console.log(result.json);

    });
});


it ('get french user', function () {
    return frisby
        .get('https://randomuser.me/api/?nationality=FR&result=1&gender=female')
        .expect('status', 200)
        .expect("json", {
            args: {
                country: "France"
            }
        });
});





