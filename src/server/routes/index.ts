import { Router } from 'express';

import { CidadesController } from './../controlles';

const router = Router();

router.get('/', (_, res) => {
  return res.send('Olá, DEV!');
});

router.get('/cidades', CidadesController.getAlleValidator, CidadesController.getAll);
router.post('/cidades', CidadesController.createValidator, CidadesController.create);
router.get('/cidades/:id', CidadesController.getByIdValidator, CidadesController.getById);
router.put('/cidades/:id', CidadesController.updateByIdValidator, CidadesController.updateById);
router.delete('/cidades/:id', CidadesController.deleteByIdValidator, CidadesController.deleteById);


export { router };