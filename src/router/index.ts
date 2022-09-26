import { Router } from 'express';
import Routes from '../apps/routes';


const router = Router();
new Routes(router) as any

export default router;