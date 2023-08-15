const request = require('supertest');
const app = require("../../app")
describe('Test Get /launches', () => {
    test('it should respond with 200 success', async () => {
        const response = await request(app)
            .get('/launches')
            .expect('Content-Type', /json/)
            .expect(200);
    })
})

describe('Test post /launches', () => {
    test('it should respond with 200 success', async () => {
        const response = await request(app).
            post('/launches')
            .send({
                "mission": "ZTM mission",
                "rocket": "ZTM IS1",
                "launchDate": "January 17, 2030",
                "target": "ZTM-442 b"
            })
            .expect('Content-Type', /json/)
            .expect(201);
    })

    test('it should catch missing property', () => { })

    test('it should catch if the date is invalid', () => { })

})

