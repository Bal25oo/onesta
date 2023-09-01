import {Router, Request, Response} from 'express';
import {getRepository, getTreeRepository} from "typeorm";
import {fruta} from '../entidades/fruta';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const frutas = await getRepository(fruta).find();
    res.json(frutas);
})

router.post('/', async (req: Request, res: Response) => {
    const nuevaFruta = await getRepository(fruta).create(req.body);
    const result = await getRepository(fruta).save(nuevaFruta);
    res.json(result);
})
router.put('/', (req: Request, res: Response) => {
    res.json({mensaje: 'metodo put'});
})
router.delete('/', async (req: Request, res: Response) => {
    getRepository(fruta).delete(req.body);
    res.json({mensaje: 'registro eliminado'});
})

export default router;