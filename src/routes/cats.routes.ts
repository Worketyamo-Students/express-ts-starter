import { Router } from 'express';
import Controllers from '../controllers/cats.controllers';
const router = Router();

router.get('/', Controllers.getAllCats);
router.get('/:id', Controllers.getCatById);
router.get('/races/:race', Controllers.getCatsFamily);

export default router;
