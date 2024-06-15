import express from 'express';
import {create,getAll} from "../controller/userController.js";
const route = express.Router();

route.post("/create",create);
route.get("/all",getAll);

export default route;