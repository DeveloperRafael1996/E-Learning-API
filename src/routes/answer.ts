import { Router } from "express"
import { postAnswer, getAnswerByLessionId, postAnswerByStudent } from "../controllers/answers"
const router = Router()


/**
 * http://localhost:3002/answer [GET]
*/

router.post('/', postAnswer)
router.get('/:lession_id', getAnswerByLessionId)
router.post('/process/student', postAnswerByStudent)


export { router }