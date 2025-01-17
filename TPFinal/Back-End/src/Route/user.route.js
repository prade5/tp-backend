import {Router} from 'express';
import {authjwt, validator} from '../Middlewares'
import * as usercontroller from '../Controllers/user.controller';
const router = Router();

//Get All user
router.get('/',[authjwt.verifyToken],usercontroller.GetAll);

//Get by id
router.get('/:id',[authjwt.verifyToken], usercontroller.GetById);

//Create
router.post('/',[
    validator.checkUserNameNoneRepeat,
    validator.checkRoleExisted,validator.isUserValid,validator.isPassValid,
    validator.IsmailValid, validator.EmailNoneRepeat, validator.NumDocumentNoneRepeat,
    validator.PhoneNoneRepeat
    ],usercontroller.Post);

//Update
router.put('/:id',[authjwt.verifyToken, authjwt.isAdmin,validator.checkRoleExisted, validator.IsmailValid], usercontroller.Put);

//Delete
router.delete('/:id',[authjwt.verifyToken, authjwt.isAdmin], usercontroller.Delete);

module.exports = router;