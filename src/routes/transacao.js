import { Router } from "express";
import transacaoController from "../controllers/transacaoController.js";

const router = Router();

router.get('/transacao', transacaoController.listarTransacoes)
router.post('/transacao', transacaoController.cadastrarTransacao)

export default router;