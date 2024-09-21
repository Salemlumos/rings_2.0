import { Router } from 'express';
import {TestController} from './a_TestController';

const router:Router = Router();

const testController = new TestController();

router.get('/test/helloWorld',(req, res,next)=>{
    testController.helloWorld()
        .then(result => res.json(result))
        .catch(err => next(err));
})

export default router;