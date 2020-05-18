const expect = require("chai").expect;
const config = require("../config.json")
const data = require('../resource/data/data.json');
const { post_mapdata } = require('../apiModules/post-mapdata')
const mapdataUrl = config.azurebaseurl + 'map-data'

describe('Mapdata - Test Suite', function () {
    this.timeout(15000000);
    describe('When valid input passed', function () {
        it('Returns response  not null  with status code 200 and response  is of type array', async function () {
            var inputdata = data["map-data"][0]
            var currentResponse = await post_mapdata(mapdataUrl, inputdata)
            expect(currentResponse).is.not.null
            expect(currentResponse.statusCode).to.equal(200);
          expect(currentResponse.body).to.be.an('array');
        });
    });

    describe('Functional Tests', function() {
        it('When Valid input is passed, all the properties(title, imageUrl, errorMessage) are returned with errorMessage property value null', async function() {
            var inputdata = data["map-data"][0]
            var currentResponse = await post_mapdata(mapdataUrl, inputdata)
            expect(currentResponse.statusCode).to.equal(200);
            expect(currentResponse.body[0]).to.include.any.keys('title');
            expect(currentResponse.body[0]).to.include.any.keys('imageUrl');
            expect(currentResponse.body[0]).to.include.any.keys('errorMessage');
            expect(currentResponse.body[0].errorMessage).to.be.null;
            expect(currentResponse.body[0].title).not.to.be.null;
            expect(currentResponse.body[0].imageUrl).not.to.be.null;
        });
    });
})