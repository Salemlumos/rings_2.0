import request from "supertest";
import express from "express";
import testRoutes from "../controllers/Test/routes";

const app = express();
app.use('/api', testRoutes); 

describe('Test API Routes', () => {

    it('should return a im alive message', async () => {
        const response = await request(app).get('/api/test/helloWorld');

        expect(response.status).toBe(200);
        console.log(response.body)
        expect(response.body).toEqual({ success: true, status: 'im alive', data: [] }); 
    });

});
