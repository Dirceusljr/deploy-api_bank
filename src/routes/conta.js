import { Router } from "express";
import contaController from "../controllers/contaController.js";

const router = Router();

router.get('/conta', contaController.listarContas)
router.post('/conta', contaController.cadastrarConta)

export default router;