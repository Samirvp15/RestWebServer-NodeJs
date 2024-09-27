
// ENTIDAD DE TO-DO PARA NUESTRA LOGICA DE NEGOCIO
export class TodoEntity {
    constructor(
        public id: number,
        public text: string,
        public completedAt?: Date | null
    ) { }

    get isCompleted() {
        //  !!this.completedAt convierte cualquier 
        //valor "falsy" (como null, undefined, 0, "", etc.) en false,
        // y cualquier valor "truthy" en true. Esto se usa para verificar si completedAt tiene un valor válido o no.
        return !!this.completedAt;
    }

    public static fromObject(object: { [key: string]: any }): TodoEntity {
        const { id, text, completedAt } = object;

        if (!id) throw 'Id is required';
        if (!text) throw 'Text is required';

        let newCompletedAt;
        if (completedAt){
            newCompletedAt = new Date(completedAt);
            if( isNaN(newCompletedAt.getTime())){
                throw 'Completed is not a valid date';
            }
        }

        return new TodoEntity(id,text,completedAt);

    }

}

