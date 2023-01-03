import { Router } from 'express';
import * as creatorControllers from '../controllers/creators.js'
const router = Router();

router.get("/", creatorControllers.getCreators);

export default router;