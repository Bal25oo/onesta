import {Router, Request, Response} from 'express';
import {getRepository, getTreeRepository} from "typeorm";
import {campo} from '../entidades/campo';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const campos = await getRepository(campo).find();
    res.json(campos);
})

router.post('/', async (req: Request, res: Response) => {
    const nuevoCampo = await getRepository(campo).create(req.body);
    const result = await getRepository(campo).save(nuevoCampo);
    res.json(result);
})
router.put('/', (req: Request, res: Response) => {
    res.json({mensaje: 'metodo put'});
})
router.delete('/', async (req: Request, res: Response) => {
    getRepository(campo).delete(req.body);
    res.json({mensaje: 'registro eliminado'});
})

export default router;