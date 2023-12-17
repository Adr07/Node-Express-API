import { Router } from "express";
import {get_employees, post_employees ,put_employees ,delete_employees} from "../controllers/empleyoees.control.js";

const router = Router();

router.get('/employes',get_employees);
router.post('/employes',post_employees);
router.put('/employes',put_employees);
router.delete('/employes',delete_employees);


export default router;