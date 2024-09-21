import dotenv from "dotenv";
import express  from "express";
import cors from "cors";

import dataSource from "../ormconfig";
import setupSwagger from "./config/swagger";

import { RegisterRoutes } from './routes/routes'; 

import TestRoutes from "./controllers/Test/routes";

dotenv.config();

const { 
        PORT,
        ALLOWED_CORS_URL,
        ALLOWED_CORS_METHODS,
        ALLOWED_CORS_HEADERS,
    } = process.env;

const app = express();
const port:string | undefined = PORT;

const corsOption = {
    origin:ALLOWED_CORS_URL?.split(","),
    methods:ALLOWED_CORS_METHODS?.split(","),
    allowedHeaders:ALLOWED_CORS_HEADERS?.split(","),
};

app.use(cors(corsOption));
dataSource
    .initialize()
        .then(()=>{
            console.log("A Conexão com o banco de dados foi estabelecida");

            app.use(express.json());
            setupSwagger(app);

            app.listen(port,()=>{
                    console.log(`Api disponível em  http://localhost:${port}`)
                });

            RegisterRoutes(app);

        }).catch((error)=>{
    console.log(error);
});

