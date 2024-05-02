import { Router } from "express"
import {postStudent } from "../controllers/students"
const router = Router()

/**
 * http://localhost:3002/student [GET]
*/

router.post('/', postStudent)

export { router }