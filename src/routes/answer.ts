import { Router } from "express"
import { postAnswer } from "../controllers/answers"
const router = Router()


/**
 * http://localhost:3002/answer [GET]
*/

router.post('/', postAnswer)



export { router }