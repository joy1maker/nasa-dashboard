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
    const completeLaunchData = {
        "mission": "ZTM mission",
        "rocket": "ZTM IS1",
        "launchDate": "January 17, 2030",
        "target": "ZTM-442 b"
    }
    const LaunchDataWithoutDate = {
        "mission": "ZTM mission",
        "rocket": "ZTM IS1",
        "target": "ZTM-442 b"
    }
    const LaunchDataWithInvalidDate = {
        "mission": "ZTM mission",
        "rocket": "ZTM IS1",
        "launchDate": "January 17, 2030aa",
        "target": "ZTM-442 b"
    }
    test('it should respond with 200 success', async () => {

        const response = await request(app).
            post('/launches')
            .send(completeLaunchData)
            .expect('Content-Type', /json/)
            .expect(201);
        const requestDate = new Date(completeLaunchData.launchDate).valueOf();
        const responseDate = new Date(response.body.launchDate).valueOf();
        expect(requestDate).toBe(responseDate);
        expect(response.body).toMatchObject(LaunchDataWithoutDate);
    })
    test('it should catch missing property', async () => {
        const response = await request(app).
            post('/launches')
            .send(LaunchDataWithoutDate)
            .expect('Content-Type', /json/)
            .expect(400);
        expect(response.body).toStrictEqual({
            'error': "Missing required launch property"
        })

    })
    test('it should catch if the date is invalid', async () => {
        const response = await request(app).
            post('/launches').
            send(LaunchDataWithInvalidDate).
            expect(400);
        expect(response.body).toStrictEqual({
            'error': "date is not valid"
        })
    })

})

