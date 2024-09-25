import { Router } from "express";
import { TodoRoutes } from "./todos/routes";


export class AppRoutes {

    static get routes(): Router {

        const router = Router();

        // ENDPOINTS GENERALES

        //ENDPOINT TODOS
        router.use('/api/todos', TodoRoutes.routes);



        return router;
    }
}