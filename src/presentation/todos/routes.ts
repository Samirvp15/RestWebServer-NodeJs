import { Router } from "express";
import { TodosController } from "./controller";


export class TodoRoutes {

    static get routes(): Router {

        const router = Router();

        const todoController = new TodosController

        // RUTAS PARA LAS PETICIONES TODOS
        router.get('/', todoController.getTodos);
        router.get('/:id', todoController.getTodobyId);
        router.post('/', todoController.createTodo);



        return router;
    }
}