import { Router } from 'express';
import TestController from './a_TestController';

const router:Router = Router();

router.get('/hello_world',(req, res,next)=>{
    TestController.helloWorld()
        .then(result => res.json(result))
        .catch(err => next(err));
})

export default router;