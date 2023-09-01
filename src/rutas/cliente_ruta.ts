import {Router, Request, Response} from 'express';
import {getRepository, getTreeRepository} from "typeorm";
import {Cliente} from '../entidades/cliente';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const clientes = await getRepository(Cliente).find();
    res.json(clientes);
})

router.post('/', async (req: Request, res: Response) => {
    const nuevoCliente = await getRepository(Cliente).create(req.body);
    const result = await getRepository(Cliente).save(nuevoCliente);
    res.json(result);
})
router.put('/', (req: Request, res: Response) => {
    res.json({mensaje: 'metodo put'});
})
router.delete('/', async (req: Request, res: Response) => {
    getRepository(Cliente).delete(req.body);
    res.json({mensaje: 'registro eliminado'});
})

export default router;