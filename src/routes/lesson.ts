import { Router } from "express"
import { deleteLessons, getLesson, getLessons, postLessons, updateLessons } from "../controllers/lessons"
const router = Router()


/**
 * http://localhost:3002/course [GET]
*/

router.get('/', getLessons)
router.get('/:id', getLesson)
router.post('/', postLessons)
router.put('/', updateLessons)
router.delete('/', deleteLessons)


export { router }