import express from 'express';
import * as authcontroller from '../Controllers/auth.controller';
const router = express.Router();

 router.post('/signin',authcontroller.signin);

module.exports = router;