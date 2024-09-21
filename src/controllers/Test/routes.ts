import { Router } from 'express';
import TestController from './a_TestController';

const router:Router = Router();

router.get('/test/helloWorld',(req, res,next)=>{
    TestController.helloWorld()
        .then(result => res.json(result))
        .catch(err => next(err));
})

export default router;