import { Request, Response } from "express";
import { prisma } from "../../data/postgres";


export class TodosController {


    // Dep. Iny.
    constructor() { }

    // FUNCIONALIDAD PARA CADA TIPO DE PETICION
    public getTodos = async (req: Request, res: Response) => {

        const todos = await prisma.todo.findMany();
        return res.json(todos);

    };

    public getTodobyId = async (req: Request, res: Response) => {

        const id = +req.params.id;
        if (isNaN(id)) return res.status(400).json({ error: 'Id not a number' });

        const todo = await prisma.todo.findFirst({
            where: { id }
        });

        (todo) ? res.json(todo) : res.status(404).json({ error: `TODO  with id ${id} not found` });
    };

    public createTodo = async (req: Request, res: Response) => {

        const { text } = req.body;

        if (!text) return res.status(400).json({ error: 'Text required' });

        const todo = await prisma.todo.create({
            data: { text }
        });

        return res.json(todo);

    };

    public updateTodo = async (req: Request, res: Response) => {

        const id = +req.params.id;
        if (isNaN(id)) return res.status(400).json({ error: 'Id not a number' });

        const todo = await prisma.todo.findFirst({
            where: { id }
        });

        if (!todo) return res.status(404).json({ error: `TODO  with id ${id} not found` });

        const { text } = req.body;

        const updatedTodo = await prisma.todo.update({
            where: {id},
            data: {text},
        });

        return res.json(updatedTodo);
    };


    public deleteTodo = async (req: Request, res: Response) => {

        const id = +req.params.id;
        if (isNaN(id)) return res.status(400).json({ error: 'Id not a number' });

        const todo = await prisma.todo.findFirst({
            where: { id }
        });

        if (!todo) return res.status(404).json({ error: `TODO  with id ${id} not found` });


        const deletedTodo = await prisma.todo.delete({
            where: {id},
        });

        (deletedTodo) ? res.json(deletedTodo) : res.status(400).json({error: `Todo with id ${id} not found`});

        return res.json({todo, deletedTodo});
    };







}