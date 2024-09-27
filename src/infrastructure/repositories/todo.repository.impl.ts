import { CreateTodoDto, TodoDataSource, TodoEntity, TodoRepository, UpdateTodoDto } from "../../domain";


// ACCESO A LA INSTANCIA DATASOURCE CON TODOS SUS DATOS OBTENIDOS Y CONVERTIDOS GRACIAS A TODODATASOURCEIMPL
// LA DATA OBTENIDA Y CONVERTIDA YA ES UN REPOSITORIO PARA USARSE DENTRO DE NUESTRA LOGICA DE NEGOCIO


// AQUI SE ENCAPSULA LA DATA OBTENIDA GRACIAS A LA CLASE ABSTRACTA TodoDataSource
// DE MANERA QUE LA LOGICA DE NEGOCIO NO SEPA DE QUE MANERA SE OBTUVIERON LOS DATOS
// SOLO SE LLAMA A TodoDataSource Y ESTE MANEJA ESA INTERACCION CON LA DB
// Y TodoRepositoryImpl ALMACENA YA DICHOS DATOS OBTENIDOS ENCAPSULANDOLOS GRACIAS A TodoRepository
// GRACIAS A LAS CLASES ABSTRACTAS SE ENCAPSULA DICHAS INTERACCIONES
export class TodoRepositoryImpl implements TodoRepository{

    constructor(
        private readonly datasource: TodoDataSource,
    ){}

    create(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
        return this.datasource.create(createTodoDto);
    }
    getAll(): Promise<TodoEntity[]> {
       return this.datasource.getAll();
    }
    findById(id: number): Promise<TodoEntity> {
       return this.datasource.findById(id);
    }
    updateById(updateTodoDto: UpdateTodoDto): Promise<TodoEntity> {
        return this.datasource.updateById(updateTodoDto);
    }
    deleteById(id: number): Promise<TodoEntity> {
        return this.datasource.deletedById(id);
    }
    
} 