import { Router } from "express";
import taxaController from "../controllers/taxaController.js";

const router = Router();

router.get('/taxa', taxaController.listarTaxa)
router.post('/taxa', taxaController.cadastrarTaxa)
router.put('/taxa/:taxa', taxaController.atualizarTaxa)


export default router;