import {Router, Request, Response} from 'express';
import {getRepository, getTreeRepository} from "typeorm";
import {Agricultor} from '../entidades/agricultor';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const agricultores = await getRepository(Agricultor).find();
    res.json(agricultores);
})

router.post('/', async (req: Request, res: Response) => {
    const nuevoAgricultor = await getRepository(Agricultor).create(req.body);
    const result = await getRepository(Agricultor).save(nuevoAgricultor);
    res.json(result);
})
router.put('/', (req: Request, res: Response) => {
    res.json({mensaje: 'metodo put'});
})
router.delete('/', async (req: Request, res: Response) => {
    getRepository(Agricultor).delete(req.body);
    res.json({mensaje: 'metodo delete'});
})

export default router;