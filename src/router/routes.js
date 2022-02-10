import express from 'express';
import home from '../controller/home.js';
import upload from '../middleware/upload.js';
const router = express.Router();

router.get('/', (req,res) =>  res.render('index'));

router.post('/', upload.single("file"), home);

export default router;