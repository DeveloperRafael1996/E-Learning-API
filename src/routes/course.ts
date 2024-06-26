import { Router } from "express"
import { getCourses, postCourse, updateCourse, getCourseByStudent } from "../controllers/courses"
const router = Router()


/**
 * http://localhost:3002/course [GET]
*/

router.get('/', getCourses)
router.get('/student', getCourseByStudent)
router.post('/', postCourse)
router.put('/', updateCourse)

export { router }