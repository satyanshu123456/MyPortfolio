import { Router } from 'express';
import { submitContact, contactHealth } from '../controllers/contactController.js';
import { contactLimiter } from '../middleware/rateLimiter.js';

const router = Router();

router.get('/health', contactHealth);
router.post('/', contactLimiter, submitContact);

export default router;

