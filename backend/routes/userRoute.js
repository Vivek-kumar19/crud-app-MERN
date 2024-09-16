import express from "express";
import { create,getAll,getById, updateById,deleteById } from "../controller/userController.js";

const route = express.Router();

route.post("/create",create);
route.get("/getAll",getAll);
route.get("/getById/:id",getById); 
route.put("/updateById/:id",updateById);
route.delete("/deleteById/:id",deleteById);
export default route;