import { Router } from 'express';
import { patientRouter } from './patient-routes.js';
import { drRouter } from './dr-routes.js';

const router = Router();

router.use('/users', patientRouter);
router.use('/doctors', drRouter);

export default router;
