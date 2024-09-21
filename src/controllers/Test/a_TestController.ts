import { Controller, Get, Route, Tags } from "tsoa";

@Route("/test")
@Tags("Testes")
class TestController extends Controller{

    @Get("/helloWorld")
    public static async helloWorld():Promise<any>{
        try {
            
            return {
                success: true,
                status: "Hello World",
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


export default TestController;