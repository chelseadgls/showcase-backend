import { Router} from 'express';
import * as itemControllers from '../controllers/items.js'
const router = Router();

router.get("/", itemControllers.getItems);

export default router;