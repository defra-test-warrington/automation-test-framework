const expect = require("chai").expect;
const config = require("../config.json")
const data = require('../resource/data/data.json');
const { get_psocontactsdetails } = require('../apiModules/get-pso-contact')
const psocontactdetails = config.azurebaseurl + 'pso/contacts'

describe('PSO Contact Details - Test Suite', function () {
    this.timeout(15000000);
    describe('When correct input is passed', function () {
        it('Should Return Status code 200 ', async function () {
            var inputdata = data['pso-contact-details'][1]
            var currentResponse = await get_psocontactsdetails(psocontactdetails, inputdata)
            expect(currentResponse).is.not.null
            expect(currentResponse.statusCode).to.equal(200);
        });
    });
})