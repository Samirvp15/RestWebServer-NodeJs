import { CreateTodoDto, UpdateTodoDto } from "../dtos";
import { TodoEntity } from "../entities/todo.entity";


export abstract class TodoDataSource{
    abstract create(createTodoDto: CreateTodoDto): Promise<TodoEntity>;

    //todo Paginacion
    abstract getAll(): Promise<TodoEntity[]>;


    abstract findById(id: number): Promise<TodoEntity>;

    abstract updateById(updateTodoDto: UpdateTodoDto): Promise<TodoEntity>;

    abstract updateById(id: number): Promise<TodoEntity>;





}