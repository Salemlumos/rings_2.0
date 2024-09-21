import { Controller, Get, Route, Tags } from "tsoa";

@Route("api/test")
@Tags("Testes")
export class TestController extends Controller{

    @Get("/helloWorld")
    public async helloWorld():Promise<any>{
        try {
            
            return {
                success: true,
                status: "im alive",
                data: [],
              };
        } catch (error) {
            return {
                success: false,
                status: "Hello World fail",
                data: [],
              };
        };
    };

};


