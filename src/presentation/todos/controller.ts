import { Request, Response } from "express";

const todos = [
    { id: 1, text: 'xd', createdAt: new Date() },
    { id: 2, text: 'aa', createdAt: new Date() },
    { id: 3, text: 'bb', createdAt: new Date() },
];


export class TodosController {

    // Dep. Iny.
    constructor() { }

    // FUNCIONALIDAD PARA CADA TIPO DE PETICION
    public getTodos = (req: Request, res: Response) => {

        return res.json(todos);

    };

    public getTodobyId = (req: Request, res: Response) => {

        const id = +req.params.id;
        if (isNaN(id)) return res.status(400).json({error: 'Id not a number'});
        const todo = todos.find(todo => todo.id === id);
        (todo) ? res.json(todo) : res.status(404).json({error: `TODO  with id ${id} not found`});
    };

    public createTodo = (req: Request, res: Response) => {

        const {text} = req.body;

        if (!text) return res.status(400).json({error: 'Text required'});

        const newTodo = {
            id: todos.length + 1,
            text: text,
            createdAt: new Date(),
        };

        todos.push(newTodo);


        return res.json(todos);

    };



}